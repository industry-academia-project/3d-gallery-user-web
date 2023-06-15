import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?:'primary' | 'secondary'
    children?:ReactNode,
    disabled?:boolean
}

const Button = ({variant = 'primary',disabled=false,children,...buttonProps}:ButtonProps) => {
  return (
    <S.Button variant={variant} disabled={disabled}>{children}</S.Button>
  )
}

export default Button