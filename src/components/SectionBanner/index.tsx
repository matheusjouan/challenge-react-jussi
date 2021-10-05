import { Button } from "../Button"

import {
  Container,
  Wrapper,
  DescriptionBannerContent,
  Title,
  TextBanner,
  WrapperImageBanner
} from "./styles"

interface SectionBannerProps {
  title: string;
  text: string;
  buttonText: string;
  image: string;
  altText: string;
}

export const SectionBanner = ({
  title, text, buttonText, image, altText
}: SectionBannerProps) => {
  return (
    <Container>
      <Wrapper>
        <DescriptionBannerContent>
          <Title>{title}</Title>
          <TextBanner>{text}</TextBanner>
          <Button typeOfButton="default">{buttonText}</Button>
        </DescriptionBannerContent>

        <WrapperImageBanner>
          <img src={image} alt={altText} />
        </WrapperImageBanner>
      </Wrapper>
    </Container>
  )
}