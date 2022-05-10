import styled from 'styled-components';
import { Wrapper } from '../Wrapper';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled(Wrapper)`
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
