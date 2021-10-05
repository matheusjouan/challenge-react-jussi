import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--color-green);
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 16px;
  position: relative;

  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 80px 16px 93px;
  }
`;

export const DescriptionBannerContent = styled.div`

  @media (min-width: 768px) {
    width: 44%;
  }

  button {
    margin-top: 32px;
    max-width: 200px;
  }
`;

export const Title = styled.h2`
  font-size: 64px;
  font-weight: 500;
  line-height: 77px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    max-width: 451px;
  }
`;

export const TextBanner = styled.p`
  margin-top: 16px;

  @media (min-width: 768px) {
    max-width: 329px;
  }
`;

export const WrapperImageBanner = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 45%;
    position: absolute;
    right: 0;
    top: 40px;
  }
    > img {
      max-width: 100%;
      
  }
`;
