import styled from 'styled-components';
import * as SummaryCardStyles from '../SummaryCard/styles';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  ${SummaryCardStyles.Container}:last-child {
    background-color: var(--green);
    color: var(--shape);
  }
`;
