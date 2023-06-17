import React,{forwardRef} from 'react'
import { Path, UseFormRegister } from "react-hook-form";
import * as S from  "./style"

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'|'size'> {
  type?: "text"|"password"|"number";
  register?:UseFormRegister<any>
  size?: 's' | 'm' | 'l';
  label?:string
  disabled?: boolean;
}

const TextInput = forwardRef<HTMLInputElement,TextInputProps>(({id,label,type = 'text', size='l',register, disabled=false,...inputProps},ref) => { 
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.TextInput ref={ref} id={id} type={type} inputsize={size} disabled={disabled} {...inputProps}  />
    </S.Wrapper>
  )
})

export default TextInput
