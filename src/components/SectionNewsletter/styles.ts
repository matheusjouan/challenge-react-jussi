import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--color-black);
  color: var(--color-white);
`;

export const Wrapper = styled.div`
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
  max-width: 550px;
  font-size: 32px;
  line-height: 40px;
  color: var(--color-white);
  text-transform: uppercase;
`;

export const NewsletterForm = styled.form`
  margin-top: 24px;
  width: 100%;
  max-width: 502px; 
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    height: 60px;
    flex: 1;
    font-size: 16px;
    color: var(--color-white);
    outline: 0;
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid var(--color-green);

    &:focus {
      border-bottom: 1px solid var(--color-pink);
    }

    &::placeholder {
      color: var(--color-white);
    }
  }

  button {
    position: absolute;
    right: 0;
    font-weight: 700;
    background-color: transparent;
    color: var(--color-green);
    border: 0;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover {
      color: var(--color-pink);
    }
  } 
`;
