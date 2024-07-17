import { SummaryCard, SummaryContainer, SummaryHeader, SummarySpan, SummaryTextContent } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary()

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