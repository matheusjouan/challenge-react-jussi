import styled from 'styled-components';

export const Container = styled.footer`
  background-color: var(--color-black);
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 26px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  img {
    max-width: 100%;
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
`;
