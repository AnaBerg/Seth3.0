import React from 'react';
import {
  MenuOutline,
  SearchOutline,
  PersonOutline,
} from '@styled-icons/evaicons-outline';

import {
  StyledLogo,
  StyledHeader,
  StyledForm,
  StyledAvatar,
  StyledMenu,
  StyledInput,
  StyledSearch,
  StyledSection,
} from './styled';

import LoginInfo from './components/LoginInfo';
import MenuDropdown from './components/MenuDropdown';

function Header() {
  return (
    <StyledHeader color="primary">
      <StyledLogo color="textPrimary" font="title" href="/">
        SETH
      </StyledLogo>
      <StyledSection>
        <StyledForm action="submit">
          <StyledInput type="text" />
          <StyledSearch type="submit">
            <SearchOutline color="#fafafc" width={24} height={24} />
          </StyledSearch>
        </StyledForm>
        <StyledAvatar>
          <PersonOutline color="#fafafc" width={30} height={30} />
          <LoginInfo />
        </StyledAvatar>
        <StyledMenu color="primary" hover="secondary">
          <MenuOutline color="#fafafc" width={24} height={24} />
          <MenuDropdown />
        </StyledMenu>
      </StyledSection>
    </StyledHeader>
  );
}

export default Header;
