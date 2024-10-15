import { Icon, SearchContainer, SearchInput } from "./styles";

export function SearchBar({ placeholder, ...props }) {
  return (
    <SearchContainer>
      <SearchInput placeholder={placeholder} {...props} />
      <Icon />
    </SearchContainer>
  );
}
