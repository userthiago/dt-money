import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

// import { Container } from './styles';

const NewTransactionModal: React.FC = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input
            type="text"
            placeholder="Descrição"
            id="description"
            required
          />
          <input type="number" placeholder="Preço" id="price" required />
          <input type="text" placeholder="Categoria" id="category" required />
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
