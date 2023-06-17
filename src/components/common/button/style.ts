import styled, { css } from "styled-components";

interface StyleProps {
  size:string
  variant:string
  disabled:boolean
}

export const Button = styled.button<StyleProps>`
  display: inline-block;
  padding: ${({ size }) => {
    if (size === 's') return '0px 10px';
    if (size === 'm') return '12px 24px';
    if (size === 'l') return '16px 32px';
    return '12px 24px';
  }};
  font-size: ${({ size }) => {
    if (size === 's') return '12px';
    if (size === 'm') return '16px';
    if (size === 'l') return '18px';
    return '16px';
  }};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ variant }) => {
    if (variant === 'primary') {
      return css`
        color: #fff;
        background-color: #007bff;

        &:hover {
          background-color: #0056b3;
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4);
        }
      `;
    }

    if (variant === 'secondary') {
      return css`
        color: #007bff;
        background-color: transparent;
        border: 1px solid #007bff;

        &:hover {
          background-color: #007bff;
          color: #fff;
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4);
        }
      `;
    }

    if (variant === 'disabled') {
      return css`
        color: #999;
        background-color: #f0f0f0;
        cursor: not-allowed;

        &:hover {
          background-color: #f0f0f0;
        }
      `;
    }

    return null;
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

