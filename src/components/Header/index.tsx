import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

type HeaderProps = {
  onOpenNewTransaction: () => void;
};

export function Header({ onOpenNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dtmoney" />
        <button onClick={onOpenNewTransaction} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
