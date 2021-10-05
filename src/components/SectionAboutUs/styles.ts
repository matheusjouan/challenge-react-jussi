import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 32px;
  background-image: linear-gradient(to bottom, var(--color-white) 57%, var(--color-grey) 43%);

  @media (min-width: 768px) {
    margin-top: 72px;
    background-image: linear-gradient(to right, var(--color-white) 50%, var(--color-grey) 50%);
  }
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 64px 16px;
    flex-direction: row;
  }
`;

export const DescriptionContent = styled.div`
  
  @media (min-width: 768px) {
    width: 23.5%;
  }

  button {
    max-width: 160px;
    margin-top: 24px;
  }
`;

export const Title = styled.h2`
  max-width: 200px;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
`;

export const TextAboutUs = styled.p`
  margin-top: 24px;
  line-height: 24px;
`;

export const WrapperImage = styled.div`
  text-align: center;
  margin-top: 32px;

  @media (min-width: 768px) {
    width: 66%;
    margin-top: 0;
  }

  > img {
    max-width: 100%;
  }
`;


