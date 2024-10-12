import { Icon, SearchContainer, SearchInput } from "./styles";

export function SearchBar() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Pesquisar" />
      <Icon />
    </SearchContainer>
  );
}
