import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSideHeader = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
 
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }

  a {
    display: block;
    text-decoration: none;

    img {
      max-width: 100%;
    }
  }
`;

export const WrapperMenuLinks = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const RightSideHeader = styled.div`
  display: none;

  @media (min-width: 768px) { 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
`;

export const SearchInputGroup = styled.form`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 240px;
    height: 40px;
    font-size: 16px;
    outline: 0;
    background-color: transparent;
    border: 1px solid var(--color-grey);
    border-radius: 24px;
    padding: 0 15px;

    &:focus {
      border: 1px solid var(--color-green);
    }

    &::placeholder {
      color: var(--color-pink);
    }
  }

  button {
    position: absolute;
    right: 10px;
    font-weight: 700;
    background-color: transparent;
    color: var(--color-black);
    border: 0;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover {
      color: var(--color-green);
    }
  } 
`;