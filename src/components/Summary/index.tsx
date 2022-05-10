import { SummaryCard, SummaryCardProps } from '../SummaryCard';
import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

const cards: SummaryCardProps[] = [
  {
    title: 'Entradas',
    icon: incomeImg,
    value: 100
  },
  {
    title: 'Saídas',
    icon: outcomeImg,
    value: 50
  },
  {
    title: 'Total',
    icon: totalImg,
    value: 150
  }
];

export function Summary() {
  return (
    <Container>
      {cards.map((card) => (
        <SummaryCard key={card.title} {...card} />
      ))}
    </Container>
  );
}
