import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Wrapper } from '../Wrapper';

export function Dashboard() {
  return (
    <Wrapper>
      <Summary />
      <TransactionsTable />
    </Wrapper>
  );
}
