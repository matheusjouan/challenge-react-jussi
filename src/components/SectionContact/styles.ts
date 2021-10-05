import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--color-pink);
`;

export const WrapperContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 136px 16px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  max-width: 676px;
  font-size: 32px;
  line-height: 40px;
  color: var(--color-white);
  text-transform: uppercase;
`;

export const Contact = styled.address`
  margin-top: 32px;
  color: var(--color-white);

  .address-title {
    line-height: 24px;
  }

  .address-link {
    display: block;
    margin-top: 8px;
    font-size: 32px;
    line-height: 24px;
    color: inherit;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
