import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px 25px;
  position: relative; 
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const WrapperUserImage = styled.div`
  width: 100%;
  text-align: center;
  
  > img {
    max-width: 200px;
    border-radius: 50%;
  }
`;

export const UserData = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 32px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  > span {
    display: block;
    word-wrap: break-word;
    
    & + span {
      margin-top: 8px;
    }
  }

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const ButtonCloseModal = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;