import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { Container, Close, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useForm } from '../../hooks/useForm';
import { api } from '../../services/api';

type NewTransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

type TransactionInputs = {
  title: string;
  value: number;
  category: string;
};

export function NewTransactionsModal({
  isOpen,
  onRequestClose
}: NewTransactionsModalProps) {
  const [type, setType] = useState<'income' | 'outcome'>('income');
  const { handleChange, values } = useForm<TransactionInputs>({
    title: '',
    value: 0,
    category: ''
  });

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      ...values,
      type
    };

    api.post('/transactions', data);
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          type="text"
          placeholder="Título"
        />
        <input
          name="value"
          value={values.value}
          onChange={handleChange}
          type="number"
          placeholder="Valor"
        />
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
        <input
          name="category"
          value={values.category}
          onChange={handleChange}
          type="text"
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
