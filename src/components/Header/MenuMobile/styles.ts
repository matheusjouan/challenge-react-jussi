import styled, { keyframes } from 'styled-components';

const openMenuMobile = keyframes`
  from {
    opacity: 0;
    transform: translate(-50px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuMobileLinks = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 0;
  position: fixed;
  top: 0;
  border: 0;
  left: 0;
  background: var(--color-white);
  z-index: 999;
  animation: ${openMenuMobile} 0.3s;
`;

export const HeaderMenuMobile = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentMenuLinksList = styled.ul`
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
`;

export const WrapperButtonsAction = styled.div`
  margin-top: 32px;
  padding: 0 16px;
`;