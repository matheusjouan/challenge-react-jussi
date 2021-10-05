import styled, { css } from 'styled-components';

interface ButtonProps {
  typeOfButton?: 'primary' | 'default';
}

const buttonTypeVariations = {
  primary: css`
    background-color: var(--color-green);
    color: var(--color-black);
    border:  0;
  `,

  default: css`
    background-color: transparent;
    color: var(--color-black);
    border: 1px solid var(--color-black);
  `,
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 48px;
  padding: 12px;
  border-radius: 6px;
  outline: 0;
  ${props => buttonTypeVariations[props.typeOfButton || 'default']}

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
