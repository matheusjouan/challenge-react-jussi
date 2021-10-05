import { FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuMobile } from './MenuMobile';
import { MenuLinks } from './MenuLinks';
import { SearchResultModal } from '../Modal/SearchResultModal';

import { CgShoppingCart, CgSearch } from 'react-icons/cg'
import logoImg from '../../assets/logoJussiVectorGreen.svg'
import api from '../../services/api';

import {
  Container,
  LeftSideHeader,
  RightSideHeader,
  SearchInputGroup,
  WrapperMenuLinks
} from "./styles"

interface ISearchResult {
  login: string;
  avatar_url: string;
  html_url: string;
}

export const Header = () => {

  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isOpenSearchModalResult, setIsOpenSearchModalResult] = useState(false);
  const [searchResult, setSearchResult] = useState<ISearchResult>({} as ISearchResult);

  const toggleShowModal = () => {
    setIsOpenSearchModalResult(!isOpenSearchModalResult);
  }

  const handleSubmitSearch = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const searchValue = searchInputRef.current?.value;
      const response = await api.get(`${searchValue}`);
      console.log(response);
      setSearchResult(response.data);
      toggleShowModal();

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <LeftSideHeader>
        <Link to="/">
          <img src={logoImg} alt="Logo da Jussi" />
        </Link>

        <WrapperMenuLinks>
          <MenuLinks />
        </WrapperMenuLinks>
      </LeftSideHeader>

      <RightSideHeader>
        <SearchInputGroup onSubmit={handleSubmitSearch}>
          <input
            type="text"
            placeholder="Buscar"
            ref={searchInputRef}
          />
          <button type="submit">
            <CgSearch size={24} />
          </button>
        </SearchInputGroup>

        <Link to="/signIn">
          Login
        </Link>

        <button type="button">
          <CgShoppingCart size={24} />
        </button>
      </RightSideHeader>
      <MenuMobile />

      <SearchResultModal
        isOpen={isOpenSearchModalResult}
        setIsOpen={toggleShowModal}
        userData={searchResult}
      />
    </Container>
  )
}