import { useState } from 'react'
import { Button } from '../../Button';
import { MenuLinks } from '../MenuLinks';

import { CgShoppingCart, CgMenu, CgClose } from 'react-icons/cg'
import logoImg from '../../../assets/logoJussiVectorGreen.svg'

import {
  Container,
  HeaderMenuMobile,
  MenuMobileLinks,
  WrapperButtonsAction
} from "./styles"

export const MenuMobile = () => {

  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

  const handleMenuMobile = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile);
  }

  return (
    <Container>
      <button
        type="button"
        onClick={handleMenuMobile}
      >
        <CgMenu size={32} />
      </button>

      <button type="button">
        <CgShoppingCart size={32} />
      </button>

      {isOpenMenuMobile &&
        <MenuMobileLinks>
          <HeaderMenuMobile>
            <img src={logoImg} alt="Logo da Jussi" />
            <button
              type="button"
              onClick={handleMenuMobile}
            >
              <CgClose size={30} />
            </button>
          </HeaderMenuMobile>

          <MenuLinks handleClick={handleMenuMobile} />

          <WrapperButtonsAction>
            <Button typeOfButton="default">
              Login
            </Button>
          </WrapperButtonsAction>
        </MenuMobileLinks>
      }
    </Container>
  )
}