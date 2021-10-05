import { Button } from "../Button"

import {
  Container,
  Wrapper,
  DescriptionContent,
  WrapperImage,
  Title,
  TextAboutUs
} from "./styles"

interface SectionAboutUsProps {
  title: string;
  text: string;
  buttonText: string;
  image: string;
  altText: string;
}

export const SectionAboutUs = ({
  title, text, buttonText, image, altText
}: SectionAboutUsProps) => {

  return (
    <Container id="sectionAboutUs">
      <Wrapper>
        <DescriptionContent>
          <Title>{title}</Title>
          <TextAboutUs>{text}</TextAboutUs>
          <Button typeOfButton="default">{buttonText}</Button>
        </DescriptionContent>

        <WrapperImage>
          <img src={image} alt={altText} />
        </WrapperImage>
      </Wrapper>
    </Container>
  )
}