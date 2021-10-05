import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container } from "./styles"

interface MenuLinksProps {
  handleClick?: () => void
}

export const MenuLinks = ({
  handleClick
}: MenuLinksProps) => {
  return (
    <Container>
      <li>
        <AnchorLink
          offset='20'
          href="#sectionOurSolutions"
          onClick={handleClick}
        >
          Nossas soluções
        </AnchorLink>
      </li>

      <li>
        <AnchorLink
          href="#sectionAboutUs"
          onClick={handleClick}
        >
          Conheça a Jüssi
        </AnchorLink>
      </li>
    </Container>
  )
}