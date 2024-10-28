import { Icon, SearchContainer, Input } from "./styles";

export function InputLogin({icon, ...props }) {
  return (
    <SearchContainer>
      {icon}
      <Input {...props} />
    </SearchContainer>
  );
}
