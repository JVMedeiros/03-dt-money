import { Header } from "../../components/Header/index";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsMainContainer, TransactionsTable, TransactionsTableBody, TransactionsTableData, TransactionsTableRow } from "./styles";

export function Transactions() {  
  return (
    <TransactionsMainContainer>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <TransactionsTableBody>
            <TransactionsTableRow>
              <TransactionsTableData width="40%">Desenvolvimento de site</TransactionsTableData>
              <TransactionsTableData>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </TransactionsTableData>
              <TransactionsTableData>Venda</TransactionsTableData>
              <TransactionsTableData>13/04/2022</TransactionsTableData>
            </TransactionsTableRow>

            <TransactionsTableRow>
              <TransactionsTableData width="40%">Hamburguer</TransactionsTableData>
              <TransactionsTableData>
                <PriceHighlight variant="outcome">
                  - R$ 59,00
                </PriceHighlight>
              </TransactionsTableData>
              <TransactionsTableData>Alimentação</TransactionsTableData>
              <TransactionsTableData>10/04/2022</TransactionsTableData>
            </TransactionsTableRow>
          </TransactionsTableBody>
        </TransactionsTable>
      </TransactionsContainer>
    </TransactionsMainContainer>
  )
}