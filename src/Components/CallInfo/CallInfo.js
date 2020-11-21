import React from 'react';

import {
  StyledContentWrapper,
  StyledInfoWrapper,
  StyledCallCard,
  StyledCardInfo,
  StyledNumber,
  StyledText,
  StyledActionsWrapper,
  StyledLink,
} from './styled';

import {
  SearchOutline,
  ClipboardOutline,
  BookOpenOutline,
  PlayCircleOutline,
  CheckmarkCircle2Outline,
  ClockOutline,
  AlertTriangleOutline,
} from '@styled-icons/evaicons-outline';

function CallInfo() {
  return (
    <StyledContentWrapper>
      <StyledInfoWrapper>
        <section>
          <StyledCallCard color="callCardBlue">
            <PlayCircleOutline color="#fafafc" height={40} width={40} />
            <StyledCardInfo>
              <StyledNumber>0</StyledNumber>
              <StyledText>Andamentos</StyledText>
            </StyledCardInfo>
          </StyledCallCard>
          <StyledCallCard color="callCardGreen">
            <CheckmarkCircle2Outline color="#fafafc" height={40} width={40} />
            <StyledCardInfo>
              <StyledNumber>0</StyledNumber>
              <StyledText>Finalizados</StyledText>
            </StyledCardInfo>
          </StyledCallCard>
        </section>

        <section>
          <StyledCallCard color="callCardYellow">
            <ClockOutline color="#fafafc" height={40} width={40} />
            <StyledCardInfo>
              <StyledNumber>0</StyledNumber>
              <StyledText>Atrasados</StyledText>
            </StyledCardInfo>
          </StyledCallCard>
          <StyledCallCard color="callCardRed">
            <AlertTriangleOutline color="#fafafc" height={40} width={40} />
            <StyledCardInfo>
              <StyledNumber>0</StyledNumber>
              <StyledText>Problemas</StyledText>
            </StyledCardInfo>
          </StyledCallCard>
        </section>
      </StyledInfoWrapper>
      <StyledActionsWrapper>
        <StyledLink href="">
          <ClipboardOutline color="#ff9023" height={35} width={35} />
          Abrir novo chamado
        </StyledLink>
        <StyledLink href="">
          <SearchOutline color="#ff9023" height={35} width={35} />
          Busca avançada
        </StyledLink>
        <StyledLink href="">
          <BookOpenOutline color="#ff9023" height={35} width={35} />
          Banco de informações
        </StyledLink>
      </StyledActionsWrapper>
    </StyledContentWrapper>
  );
}

export default CallInfo;
