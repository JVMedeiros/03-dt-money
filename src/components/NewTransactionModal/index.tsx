import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionModalButton, TransactionModalForm, TransactionModalInput, TransactionTypeButton, TransactionTypeContainer } from './styles';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
    <Overlay />

    <Content>
      <Dialog.Title>Nova transação</Dialog.Title>

      <CloseButton>
        <X size={24}/>
      </CloseButton>

      <TransactionModalForm action="">
        <TransactionModalInput type="text" placeholder='Descrição' required/>
        <TransactionModalInput type="number" placeholder='Preço' required/>
        <TransactionModalInput type="text" placeholder='Categoria' required/>

        <TransactionTypeContainer>
          <TransactionTypeButton variant='income'>
            <ArrowCircleUp size={24} />
            Entrada
          </TransactionTypeButton>

          <TransactionTypeButton variant='outcome'>
            <ArrowCircleDown size={24} />
            Saída
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <TransactionModalButton type='submit'>
          Cadastrar
        </TransactionModalButton>
      </TransactionModalForm>
    </Content>

  </Dialog.Portal>
  )
}