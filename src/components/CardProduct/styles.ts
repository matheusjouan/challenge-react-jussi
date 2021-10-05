import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 381px;
  padding: 16px;  
  border: 1px solid var(--color-grey);
  border-radius: 4px;

  @media (min-width: 576px) {
    width: 48%;
  }

  @media (min-width: 768px) {
    width: 23%;
  }
`;

export const WrapperProductImage = styled.div`
  width: 100px;
  height: 100px;

  img {
    max-width: 100%;
    border-radius: 50%;
  }
`;

export const TitleProduct = styled.h3`
  margin-top: 50px;
  font-weight: 500;
  line-height: 24px;
`;

export const DescriptionProduct = styled.p`
  margin-top: 16px;
  font-size: 12px;
  font-weight: 500px;
  line-height: 18px;
  color: var(--color-pink);

`;

export const WrapperListFeatures = styled.ul`
  margin-top: 16px;

  li {
    font-size: 12px;
    color: var(--color-darkGrey);

    & + li {
      margin-top: 2px;
    }
  }
`;

export const WrapperButton = styled.div`
  margin-top: 16px;
`;
