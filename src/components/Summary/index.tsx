import { SummaryCard, SummaryContainer, SummaryHeader, SummarySpan, SummaryTextContent } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.outcome += transaction.price
      acc.total -= transaction.price

    }
    
    return acc;
  }, { income: 0, outcome: 0, total: 0 })

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryHeader>
          <SummarySpan>Entradas</SummarySpan>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </SummaryHeader>
          <SummaryTextContent>{priceFormatter.format(summary.income)}</SummaryTextContent>
      </SummaryCard>

      <SummaryCard>
        <SummaryHeader>
          <SummarySpan>Saídas</SummarySpan>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </SummaryHeader>
          <SummaryTextContent>{priceFormatter.format(summary.outcome)}</SummaryTextContent>
      </SummaryCard>

      <SummaryCard variant="green">
        <SummaryHeader>
          <SummarySpan>Total</SummarySpan>
          <CurrencyDollar size={32} color="#00b37e"/>
        </SummaryHeader>
          <SummaryTextContent>{priceFormatter.format(summary.total)}</SummaryTextContent>
      </SummaryCard>
    </SummaryContainer>
  )
}