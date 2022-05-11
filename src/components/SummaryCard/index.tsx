import { formatCurrency } from '../../utils/intl';
import { Container } from './styles';

export type SummaryCardProps = {
  title: string;
  icon: string;
  value: number;
};

export function SummaryCard({ icon, title, value }: SummaryCardProps) {
  return (
    <Container>
      <header>
        <p>{title}</p>
        <img src={icon} alt={title} />
      </header>
      <strong>{formatCurrency(value)}</strong>
    </Container>
  );
}
