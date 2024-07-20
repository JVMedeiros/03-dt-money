import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormButton, SearchFormContainer, SearchFormInput } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionContext";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchFormInput 
        type='text' 
        placeholder="Busque por transações"
        {...register('query')}  
      />
      <SearchFormButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </SearchFormButton>
    </SearchFormContainer>
  )
}