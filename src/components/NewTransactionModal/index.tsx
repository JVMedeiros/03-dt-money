import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionModalButton, TransactionModalForm, TransactionModalInput, TransactionTypeButton, TransactionTypeContainer } from './styles';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../context/TransactionContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const createTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { category, description, price, type } = data;
    
    await createTransaction({
      category, 
      description, 
      price, 
      type
    })
    reset();
  }

  return (
    <Dialog.Portal>
    <Overlay />

    <Content>
      <Dialog.Title>Nova transação</Dialog.Title>

      <CloseButton>
        <X size={24}/>
      </CloseButton>

      <TransactionModalForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <TransactionModalInput             
          type="text"
          placeholder="Descrição"
          required
          {...register('description')}
          />
        <TransactionModalInput             
          type="number"
          placeholder="Preço"
          required
          {...register('price', { valueAsNumber: true })}
        />
        <TransactionModalInput 
          type="text"
          placeholder="Categoria"
          required
          {...register('category')}
        />

        <Controller 
          control={control}
          name="type"
          render={({field}) => {
            return (
              <TransactionTypeContainer 
                onValueChange={field.onChange} 
                value={field.value}
              >
                <TransactionTypeButton variant='income' value='income'>
                  <ArrowCircleUp size={24} />
                    Entrada
                </TransactionTypeButton>
              
                <TransactionTypeButton variant='outcome' value='outcome'>
                  <ArrowCircleDown size={24} />
                    Saída
                </TransactionTypeButton>
            </TransactionTypeContainer>
            )
          }}
        />

        <TransactionModalButton type='submit' disabled={isSubmitting}>
          Cadastrar
        </TransactionModalButton>
      </TransactionModalForm>
    </Content>

  </Dialog.Portal>
  )
}