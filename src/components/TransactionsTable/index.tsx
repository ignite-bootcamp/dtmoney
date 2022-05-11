import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatCurrency, formatDate } from '../../utils/intl';
import { Container, Value } from './styles';

type Transactions = {
  id: number;
  title: string;
  value: number;
  category: string;
  created_at: string;
  type: 'income' | 'outcome';
};

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <Value type={transaction.type}>
                {transaction.type === 'income'
                  ? formatCurrency(transaction.value)
                  : `-${formatCurrency(transaction.value)}`}
              </Value>
              <td>{transaction.category}</td>
              <td>{formatDate(new Date(transaction.created_at))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
