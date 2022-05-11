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
    <Modal onRequestClose={onRequestClose} isOpen={isOpen}>
      <Container>hello</Container>
    </Modal>
  );
}
