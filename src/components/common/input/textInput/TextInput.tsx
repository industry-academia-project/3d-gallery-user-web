import React, { InputHTMLAttributes } from 'react'
import * as S from  "./style"

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'|'size'> {
  type?: "text"|"password"|"number";
  size?: 's' | 'm' | 'l';
  label?:string
  disabled?: boolean;
}

const Input = ({id,label,type = 'text', size='m',disabled=false,...inputProps}:TextInputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.TextInput type={type} inputSize={'m'} disabled={disabled} {...inputProps}/>
    </S.Wrapper>
  )
}

export default Input
