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
  StyledHeader,
  StyledTableWrapper,
  StyledLine,
  StyledTable,
  StyledTableHeader,
  StyledTicket,
  StyledClient,
  StyledSubject,
  StyledStatus,
  StyledPriority,
  StyledTicketVar,
  StyledClientVar,
  StyledSubjectVar,
  StyledStatusVar,
  StyledPriorityVar,
  StyledButtonCall,
  StyledWarpper,
  StyledStickyDiv,
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
        <StyledLink href="http://192.168.88.41:3000/novo-chamado">
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
      <StyledStickyDiv>
        <StyledHeader>
          <StyledWarpper>
            <AlertTriangleOutline color="#ff9023" width={24} height={24} />
            <StyledText>Chamados com Problemas</StyledText>
          </StyledWarpper>
        </StyledHeader>
        <StyledLine />

        <StyledTableWrapper>
          <StyledTable>
            <StyledTableHeader>
              <StyledTicket>Ticket</StyledTicket>
              <StyledClient>Cliente</StyledClient>
              <StyledSubject>Assunto</StyledSubject>
              <StyledStatus>St.</StyledStatus>
              <StyledPriority>Pr.</StyledPriority>
            </StyledTableHeader>
            <tr>
              <StyledButtonCall>
                <StyledTicketVar>000000</StyledTicketVar>
                <StyledClientVar>LIVTI</StyledClientVar>
                <StyledSubjectVar>Desenvolver</StyledSubjectVar>
                <StyledStatusVar>
                  <PlayCircleOutline color="#ff9023" width={18} height={18} />
                </StyledStatusVar>
                <StyledPriorityVar>5</StyledPriorityVar>
              </StyledButtonCall>
            </tr>
          </StyledTable>
        </StyledTableWrapper>
      </StyledStickyDiv>
    </StyledContentWrapper>
  );
}

export default CallInfo;
