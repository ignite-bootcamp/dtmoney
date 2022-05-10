import { Container } from './styles';

export type SummaryCardProps = {
  title: string;
  icon: string;
  value: number;
};

function formatCurrency(value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

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
