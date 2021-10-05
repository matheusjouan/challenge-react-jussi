
import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1056px;
  margin: 56px auto 0;
  padding: 0 16px;  
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;

  &::before {
    content: '//';
    display: inline-block;
    color: var(--color-green);
    margin-right: 4px;
    width: 31px;
  }
`;

export const WrapperCardsProduct = styled.div`
  margin-top: 24px;   
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;