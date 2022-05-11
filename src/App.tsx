import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionsModal } from './components/NewTransactionModal';
import { GlobalStyles } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  return (
    <>
      <Header onOpenNewTransaction={() => setIsNewTransactionModalOpen(true)} />
      <Dashboard />

      <NewTransactionsModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() => setIsNewTransactionModalOpen(false)}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
