import { useTransactions } from '../../context/transactions';
import { formatCurrency, formatDate } from '../../utils/intl';
import { Container, Value } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
