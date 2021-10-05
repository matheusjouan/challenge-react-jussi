import { Container } from "./styles"

interface SocialNetworksLinkProps {
  image: string;
  url: string;
  altText: string;
}

export const SocialNetworksLink = ({
  image,
  altText,
  url
}: SocialNetworksLinkProps) => {
  return (
    <Container href={url}>
      <img src={image} alt={altText} />
    </Container>
  )
}