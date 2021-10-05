import { Button } from "../Button"
import {
  Container,
  TitleProduct,
  DescriptionProduct,
  WrapperListFeatures,
  WrapperProductImage,
  WrapperButton
} from "./styles"

interface CardProductProps {
  id: number;
  image: string;
  name: string;
  description: string;
  infos: string[];
  buttonText: string;
}

export const CardProduct = ({
  image, name, description, infos, buttonText
}: CardProductProps) => {
  return (
    <Container>
      <WrapperProductImage>
        <img src={image} alt={name} />
      </WrapperProductImage>

      <TitleProduct>{name}</TitleProduct>
      <DescriptionProduct>{description}</DescriptionProduct>

      <WrapperListFeatures>
        {infos.map(item => (
          <li key={item}>{item}</li>
        ))}
      </WrapperListFeatures>

      <WrapperButton>
        <Button typeOfButton="primary">
          {buttonText}
        </Button>
      </WrapperButton>
    </Container>
  )
}