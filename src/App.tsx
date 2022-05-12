import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionsModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './context/transactions';
import { GlobalStyles } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={() => setIsNewTransactionModalOpen(true)} />
      <Dashboard />

      <NewTransactionsModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() => setIsNewTransactionModalOpen(false)}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
}

export default App;
