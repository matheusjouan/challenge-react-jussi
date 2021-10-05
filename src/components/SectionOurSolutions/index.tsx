import { CardProduct } from "../CardProduct"
import { Container, Title, WrapperCardsProduct } from "./styles"

interface IProducts {
  id: number;
  image: string;
  name: string;
  description: string;
  infos: string[];
  buttonText: string;
}

interface SectionOurSolutionsProps {
  title: string;
  products: IProducts[]
}

export const SectionOurSolutions = ({
  title, products
}: SectionOurSolutionsProps) => {
  return (
    <Container id="sectionOurSolutions">
      <Title>{title}</Title>

      <WrapperCardsProduct>
        {products.map(product => (
          <CardProduct key={product.id} {...product} />
        ))}
      </WrapperCardsProduct>
    </Container>
  )
}