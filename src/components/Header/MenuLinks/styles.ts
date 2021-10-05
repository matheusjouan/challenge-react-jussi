import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;
  list-style: none;

  li {
    padding: 20px 16px;
    border-top: 1px solid var(--color-grey);
    border-bottom: 1px solid var(--color-grey);

    & + li {
      border-top: 0;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
    display: flex;
    align-items: center;

    li {
      margin-left: 30px;
      padding: 0;
      border: 0;
    }
  }
`;
