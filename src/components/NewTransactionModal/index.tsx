import Modal from 'react-modal';
import { Container, Close, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

type NewTransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({
  isOpen,
  onRequestClose
}: NewTransactionsModalProps) {
  const [type, setType] = useState<'income' | 'outcome'>('income');

  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Close onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar" />
      </Close>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <RadioBox
            isActive={type === 'income'}
            onClick={() => setType('income')}
            activeColor="green"
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <p>Entrada</p>
          </RadioBox>
          <RadioBox
            isActive={type === 'outcome'}
            activeColor="red"
            onClick={() => setType('outcome')}
            type="button"
          >
            <img src={outcomeImg} alt="Saída" />
            <p>Saída</p>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
