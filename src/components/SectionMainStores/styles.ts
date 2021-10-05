import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  background-color: var(--color-grey);
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 28px 16px;
  display: flex;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: column;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const LeftSideContent = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 30%;
    display: flex;
    align-items: center; 
    }
`;

export const LinkMainStores = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.3s;

  &::after {
    content: '→';
    margin-left: 45px;

    @media (min-width: 576px) {
      display: none;
    }

    @media (min-width: 992px) {
      display: inline-block;
    }
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const RightSideContent = styled.div`
  display: none;

  @media (min-width: 576px) {
    width: 100%;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 992px) {
    width: 65%;
    margin-top: 0;
  }
`;

export const WrapperImageLogo = styled.div`

  > img {
    max-width: 100%;
  }
`;

