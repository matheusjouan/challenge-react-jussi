// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import { SocialNetworksLink } from '../SocialNetworksLink';
import brandImg from '../../assets/wppcompany.svg';
import icoFacebook from '../../assets/facebook.svg';
import icoInstagram from '../../assets/instagram.svg';
import icoLinkedin from '../../assets/linkedin.svg';

import { Brand, Container, SocialNetworks, Wrapper } from "./styles"

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Brand>
          <img src={brandImg} alt="Logo da empresa Wpp" />
        </Brand>

        <SocialNetworks>
          <SocialNetworksLink image={icoFacebook} url="#" altText="Link para facebook da empresa" />
          <SocialNetworksLink image={icoInstagram} url="#" altText="Link para instagram da empresa" />
          <SocialNetworksLink image={icoLinkedin} url="#" altText="Link para linkedin da empresa" />
        </SocialNetworks>
      </Wrapper>
    </Container>
  )
}