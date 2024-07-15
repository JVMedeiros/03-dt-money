import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionModalButton, TransactionModalForm, TransactionModalInput } from './styles';

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

        <TransactionModalButton type='submit'>
          Cadastrar
        </TransactionModalButton>
      </TransactionModalForm>
    </Content>

  </Dialog.Portal>
  )
}