import { Header } from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import { Summary } from "../../components/Summary";

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export const Transactions: React.FC = () => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 50,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
