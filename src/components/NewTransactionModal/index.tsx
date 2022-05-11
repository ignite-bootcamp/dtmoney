import Modal from 'react-modal';
import { Container } from './styles';

type NewTransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({
  isOpen,
  onRequestClose
}: NewTransactionsModalProps) {
  return (
    <Modal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
