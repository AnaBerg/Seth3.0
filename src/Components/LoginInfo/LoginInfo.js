import React from 'react';

import {
  StyledModal,
  StyledHeader,
  StyledTitle,
  StyledContentWrapper,
  StyledButton,
  StyledLine,
  StyledPopUp,
} from './styled';

function LoginInfo() {
  return (
    <StyledModal>
      <StyledPopUp>
        <StyledHeader>
          <StyledTitle>Ana Berg</StyledTitle>
        </StyledHeader>
        <StyledLine />
        <StyledContentWrapper>
          <StyledButton>Perfil</StyledButton>
          <StyledButton>Notificações</StyledButton>
          <StyledButton>Sair</StyledButton>
        </StyledContentWrapper>
      </StyledPopUp>
    </StyledModal>
  );
}

export default LoginInfo;
