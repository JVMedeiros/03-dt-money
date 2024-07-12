import { SummaryCard, SummaryContainer, SummaryHeader, SummarySpan, SummaryTextContent } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryHeader>
          <SummarySpan>Entradas</SummarySpan>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </SummaryHeader>
          <SummaryTextContent>R$ 17.400,00</SummaryTextContent>
      </SummaryCard>

      <SummaryCard>
        <SummaryHeader>
          <SummarySpan>Saídas</SummarySpan>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </SummaryHeader>
          <SummaryTextContent>R$ 7.400,00</SummaryTextContent>
      </SummaryCard>

      <SummaryCard variant="green">
        <SummaryHeader>
          <SummarySpan>Total</SummarySpan>
          <CurrencyDollar size={32} color="#00b37e"/>
        </SummaryHeader>
          <SummaryTextContent>R$ 10.000,00</SummaryTextContent>
      </SummaryCard>
    </SummaryContainer>
  )
}