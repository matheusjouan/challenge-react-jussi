import styled from 'styled-components';

export const Container = styled.a`

  & + a {
    margin-left: 17px;
  }

  > img {
    width: 32px;
    height: 32px;
  }
`;
