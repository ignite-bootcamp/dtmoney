import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  return (
    <>
      <Header onOpenNewTransaction={() => setIsNewTransactionModalOpen(true)} />
      <Dashboard />

      <Modal
        onRequestClose={() => setIsNewTransactionModalOpen(false)}
        isOpen={isNewTransactionModalOpen}
      >
        <h1>hello</h1>
      </Modal>
      <GlobalStyles />
    </>
  );
}

export default App;
