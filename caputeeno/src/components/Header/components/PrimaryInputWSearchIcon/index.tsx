import { SearchIcon } from "@/components/icons/search-icon";
import { InputHTMLAttributes } from "react";
import { InputContainer, PrimaryInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput onChange={(event: any) => props.handleChange(event.target.value)} {...props} />
      <SearchIcon />
    </InputContainer>
  )
}