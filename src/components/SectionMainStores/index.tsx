import {
  Container,
  Wrapper,
  LeftSideContent,
  LinkMainStores,
  RightSideContent,
  WrapperImageLogo

} from "./styles"

interface SectionMainStoresProps {
  text: string;
  stores: {
    id: number;
    image: string;
    altText: string;
  }[]
}

export const SectionMainStores = ({
  text,
  stores
}: SectionMainStoresProps) => {
  return (
    <Container>
      <Wrapper>
        <LeftSideContent>
          <LinkMainStores to="/">
            {text}
          </LinkMainStores>
        </LeftSideContent>

        <RightSideContent>
          {stores.map(item => (
            <WrapperImageLogo key={item.id}>
              <img src={item.image} alt={item.altText} />
            </WrapperImageLogo>
          ))}
        </RightSideContent>
      </Wrapper>
    </Container>
  )
}