import {
  Contact,
  Container,
  Title,
  WrapperContent
} from "./styles"

interface SectionContactProps {
  title: string;
  email: string;
}

export const SectionContact = ({
  title, email
}: SectionContactProps) => {

  return (
    <Container>
      <WrapperContent>
        <Title>{title}</Title>
        <Contact>
          <p className="address-title">Entre em contato: </p>

          <a
            href="malito: comercial@jussi.com.br"
            className="address-link"
          >
            {email}
          </a>
        </Contact>
      </WrapperContent>
    </Container>
  )
}