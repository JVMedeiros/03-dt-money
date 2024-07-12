import { MagnifyingGlass } from "phosphor-react";
import { SearchFormButton, SearchFormContainer, SearchFormInput } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormInput placeholder="Busque por transações"/>
      <SearchFormButton type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </SearchFormButton>
    </SearchFormContainer>
  )
}