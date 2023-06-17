import { LegacyRef } from "react";
import styled, { css } from "styled-components";

const getSizeStyles = (size: 's'|'m'|'l') => {
    switch (size) {
      case 's':
        return css`
          font-size: 12px;
          padding: 6px 10px;
        `;
      case 'm':
        return css`
          font-size: 14px;
          padding: 8px 12px;
        `;
      case 'l':
        return css`
          font-size: 16px;
          padding: 10px 14px;
        `;
      default:
        return css`
          font-size: 14px;
          padding: 8px 12px;
        `;
    }
  };

  interface StyledInputProps {
    inputsize?: 's'|'m'|'l';
    disabled?: boolean;
    ref?:LegacyRef<HTMLInputElement>
  }

  export const Wrapper = styled.div`
  `
  export const Label = styled.label`
    display:block;
    font-size:12px;
    font-weight:700;
  `

export const TextInput = styled.input<StyledInputProps>`
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  ${({ inputsize }) => getSizeStyles(inputsize || 'm')}
`