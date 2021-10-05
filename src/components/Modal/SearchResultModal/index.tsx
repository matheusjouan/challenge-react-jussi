import { Modal } from "../index";

import { CgClose } from 'react-icons/cg'


import {
  Container,
  ButtonCloseModal,
  WrapperUserImage,
  UserData
}
  from "./styles";

interface SearchResultModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  userData: {
    login: string;
    avatar_url: string;
    html_url: string;
  }
}

export const SearchResultModal = ({
  isOpen, setIsOpen, userData
}: SearchResultModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <ButtonCloseModal onClick={setIsOpen}>
          <CgClose size={30} />
        </ButtonCloseModal>

        <WrapperUserImage>
          <img src={userData.avatar_url} alt={userData.login} />
        </WrapperUserImage>

        <UserData>
          <h2>Dados do Usuário</h2>
          <span><b>Login:</b> {userData.login}</span>
          <span><b>Repositório:</b>
            <a href={userData.html_url}>{userData.html_url}</a>
          </span>
        </UserData>
      </Container>
    </Modal>
  )
}