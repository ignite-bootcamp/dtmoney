import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s ease-in-out;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
};

type RadioBoxProps = {
  isActive: boolean;
  activeColor: keyof typeof colors;
};

export const RadioBox = styled.button<RadioBoxProps>`
  background-color: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #aaa;
  }

  img {
    width: 20px;
    height: 20px;
  }

  p {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
