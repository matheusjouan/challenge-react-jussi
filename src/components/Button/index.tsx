import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeOfButton?: 'primary' | 'default';
}

export const Button = ({ typeOfButton = 'default', children, ...rest }: ButtonProps) => {
  return (
    <Container type="button" typeOfButton={typeOfButton} {...rest} >
      {children}
    </Container>
  )
}