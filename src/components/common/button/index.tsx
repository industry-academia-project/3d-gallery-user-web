import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from "./style"

type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?:'primary' | 'secondary'
    children?:ReactNode,
    disabled?:boolean
    size?: ButtonSize;
}

const Button = ({variant = 'primary',size="m",disabled=false,children,...buttonProps}:ButtonProps) => {
  return (
    <S.Button size={size} variant={variant} disabled={disabled} {...buttonProps}>{children}</S.Button>
  )
}

export default Button