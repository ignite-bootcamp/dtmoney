import { Container } from './styles';

export function TransactionsTable() {
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
          <tr>
            <td>Curso</td>
            <td>R$ 100,00</td>
            <td>Educação</td>
            <td>25/04/2022 </td>
          </tr>
          <tr>
            <td>Curso</td>
            <td>R$ 100,00</td>
            <td>Educação</td>
            <td>25/04/2022 </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
