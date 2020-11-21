import React from 'react';

import {
  StyledGrid,
  StyledContentWrapper,
  StyledInfoWrapper,
  StyledCallCard,
  StyledCardInfo,
  StyledNumber,
  StyledText,
  StyledActionsWrapper,
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

import Header from '../Header';

function LandingPage() {
  return (
    <>
      <Header />
      <StyledGrid>
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
                <CheckmarkCircle2Outline
                  color="#fafafc"
                  height={40}
                  width={40}
                />
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
            <a href="#">
              <ClipboardOutline color="black" height={24} width={24} />
              Abrir novo chamado
            </a>
            <a href="#">
              <SearchOutline color="black" height={24} width={24} />
              Busca avançada
            </a>
            <a href="#">
              <BookOpenOutline color="black" height={24} width={24} />
              Banco de informações
            </a>
          </StyledActionsWrapper>
        </StyledContentWrapper>
        <section></section>
      </StyledGrid>
    </>
  );
}

export default LandingPage;
