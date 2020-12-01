import React from 'react';

import {
  StyledTableWrapper,
  StyledTable,
  StyledTableHeader,
  StyledButtonCall,
  StyledClient,
  StyledClientVar,
  StyledPriority,
  StyledPriorityVar,
  StyledStatus,
  StyledStatusVar,
  StyledSubject,
  StyledSubjectVar,
  StyledTicket,
  StyledTicketVar,
  StyledHeader,
  StyledDiv,
  StyledText,
  StyledForm,
  StyledInput,
  StyledSearch,
  StyledLine,
  StyledBoxShadow,
  StyledModal,
} from './styled';

import {
  PhoneCallOutline,
  SearchOutline,
  PlayCircleOutline,
} from '@styled-icons/evaicons-outline';

function PortalCall() {
  return (
    <StyledModal>
      <StyledBoxShadow>
        <StyledHeader>
          <StyledDiv>
            <PhoneCallOutline color="#ff9023" width={24} height={24} />
            <StyledText>Chamados do Portal</StyledText>
          </StyledDiv>
          <StyledForm action="">
            <StyledInput type="text" />
            <StyledSearch>
              <SearchOutline color="#fafafc" width={24} height={24} />
            </StyledSearch>
          </StyledForm>
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
                <StyledSubjectVar>
                  [DEV] - Desenvolver SETH 3.0
                </StyledSubjectVar>
                <StyledStatusVar>
                  <PlayCircleOutline color="#ff9023" width={18} height={18} />
                </StyledStatusVar>
                <StyledPriorityVar>5</StyledPriorityVar>
              </StyledButtonCall>
            </tr>
          </StyledTable>
        </StyledTableWrapper>
      </StyledBoxShadow>
    </StyledModal>
  );
}

export default PortalCall;
