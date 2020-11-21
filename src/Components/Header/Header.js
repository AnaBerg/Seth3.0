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
} from './styled';

function Header() {
  return (
    <StyledHeader color="primary">
      <StyledLogo color="textPrimary" font="title" href="">
        SETH
      </StyledLogo>
      <StyledForm action="">
        <StyledInput type="text" />
        <StyledSearch type="submit">
          <SearchOutline color="#fafafc" width={24} height={24} />
        </StyledSearch>
      </StyledForm>
      <StyledAvatar>
        <PersonOutline color="#fafafc" width={30} height={30} />
      </StyledAvatar>
      <StyledMenu color="primary" hover="secondary">
        <MenuOutline color="#fafafc" width={24} height={24} />
      </StyledMenu>
    </StyledHeader>
  );
}

export default Header;
