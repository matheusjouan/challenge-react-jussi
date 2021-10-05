import { FormEvent } from "react"
import {
  Container,
  Wrapper,
  Title,
  NewsletterForm,
  InputGroup
} from "./styles"

export const SectionNewsletter = () => {

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log('Envio do formulário de e-mail')
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          receba novidades da nossa área de produtos digitais.
        </Title>

        <NewsletterForm onSubmit={handleSubmitForm}>
          <InputGroup>
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Cadastrar</button>
          </InputGroup>
        </NewsletterForm>
      </Wrapper>
    </Container>
  )
}