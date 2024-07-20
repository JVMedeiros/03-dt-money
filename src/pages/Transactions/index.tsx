import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header/index";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../context/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighlight, TransactionsContainer, TransactionsMainContainer, TransactionsTable, TransactionsTableBody, TransactionsTableData, TransactionsTableRow } from "./styles";

export function Transactions() {
  const transactions  = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  
  return (
    <TransactionsMainContainer>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <TransactionsTableBody>
            {transactions.map(transaction => {
              return (
                <TransactionsTableRow key={transaction.id}>
                  <TransactionsTableData width="50%">{transaction.description}</TransactionsTableData>
                  <TransactionsTableData>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </TransactionsTableData>
                  <TransactionsTableData>{transaction.category}</TransactionsTableData>
                  <TransactionsTableData>{dateFormatter.format(new Date(transaction.createdAt))}</TransactionsTableData>
                </TransactionsTableRow>
              )
            })}
          </TransactionsTableBody>
        </TransactionsTable>
      </TransactionsContainer>
    </TransactionsMainContainer>
  )
}