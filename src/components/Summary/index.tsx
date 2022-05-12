import { SummaryCard } from '../SummaryCard';
import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../context/transactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value;
        acc.total += transaction.value;
      }

      if (transaction.type === 'outcome') {
        acc.outcome += transaction.value;
        acc.total -= transaction.value;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  );

  return (
    <Container>
      <SummaryCard title="Entradas" icon={incomeImg} value={summary.income} />
      <SummaryCard title="Saídas" icon={outcomeImg} value={summary.outcome} />
      <SummaryCard title="Total" icon={totalImg} value={summary.total} />
    </Container>
  );
}
