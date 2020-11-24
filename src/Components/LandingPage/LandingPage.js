import React from 'react';

import {
  PersonOutline,
  SearchOutline,
  PlayCircleOutline,
} from '@styled-icons/evaicons-outline';

import {
  StyledGrid,
  StyledContentWrapper,
  StyledHeader,
  StyledDiv,
  StyledWarpper,
  StyledText,
  StyledForm,
  StyledInput,
  StyledSearch,
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
} from './styled';

import Header from '../Header';
import CallInfo from '../CallInfo';

function LandingPage() {
  return (
    <>
      <Header />
      <StyledGrid>
        <CallInfo />
        <StyledContentWrapper>
          <div>
            <StyledHeader>
              <StyledDiv>
                <StyledWarpper>
                  <PersonOutline color="#ff9023" width={24} height={24} />
                  <StyledText>Meus Chamados</StyledText>
                </StyledWarpper>
                <StyledForm action="">
                  <StyledInput type="text" />
                  <StyledSearch type="submit">
                    <SearchOutline color="#fafafc" width={18} height={18} />
                  </StyledSearch>
                </StyledForm>
              </StyledDiv>
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
                      <PlayCircleOutline
                        color="#ff9023"
                        width={18}
                        height={18}
                      />
                    </StyledStatusVar>
                    <StyledPriorityVar>5</StyledPriorityVar>
                  </StyledButtonCall>
                </tr>
                <tr>
                  <StyledButtonCall>
                    <StyledTicketVar>000000</StyledTicketVar>
                    <StyledClientVar>LIVTI</StyledClientVar>
                    <StyledSubjectVar>
                      [DEV] - Desenvolver SETH 3.0
                    </StyledSubjectVar>
                    <StyledStatusVar>
                      <PlayCircleOutline
                        color="#ff9023"
                        width={18}
                        height={18}
                      />
                    </StyledStatusVar>
                    <StyledPriorityVar>5</StyledPriorityVar>
                  </StyledButtonCall>
                </tr>
                <tr>
                  <StyledButtonCall>
                    <StyledTicketVar>000000</StyledTicketVar>
                    <StyledClientVar>LIVTI</StyledClientVar>
                    <StyledSubjectVar>
                      [DEV] - Desenvolver SETH 3.0
                    </StyledSubjectVar>
                    <StyledStatusVar>
                      <PlayCircleOutline
                        color="#ff9023"
                        width={18}
                        height={18}
                      />
                    </StyledStatusVar>
                    <StyledPriorityVar>5</StyledPriorityVar>
                  </StyledButtonCall>
                </tr>
                <tr>
                  <StyledButtonCall>
                    <StyledTicketVar>000000</StyledTicketVar>
                    <StyledClientVar>LIVTI</StyledClientVar>
                    <StyledSubjectVar>
                      [DEV] - Desenvolver SETH 3.0
                    </StyledSubjectVar>
                    <StyledStatusVar>
                      <PlayCircleOutline
                        color="#ff9023"
                        width={18}
                        height={18}
                      />
                    </StyledStatusVar>
                    <StyledPriorityVar>5</StyledPriorityVar>
                  </StyledButtonCall>
                </tr>
                <tr>
                  <StyledButtonCall>
                    <StyledTicketVar>000000</StyledTicketVar>
                    <StyledClientVar>LIVTI</StyledClientVar>
                    <StyledSubjectVar>
                      [DEV] - Desenvolver SETH 3.0
                    </StyledSubjectVar>
                    <StyledStatusVar>
                      <PlayCircleOutline
                        color="#ff9023"
                        width={18}
                        height={18}
                      />
                    </StyledStatusVar>
                    <StyledPriorityVar>5</StyledPriorityVar>
                  </StyledButtonCall>
                </tr>
                <tr>
                  <StyledButtonCall>
                    <StyledTicketVar>000000</StyledTicketVar>
                    <StyledClientVar>LIVTI</StyledClientVar>
                    <StyledSubjectVar>
                      [DEV] - Desenvolver SETH 3.0
                    </StyledSubjectVar>
                    <StyledStatusVar>
                      <PlayCircleOutline
                        color="#ff9023"
                        width={18}
                        height={18}
                      />
                    </StyledStatusVar>
                    <StyledPriorityVar>5</StyledPriorityVar>
                  </StyledButtonCall>
                </tr>
              </StyledTable>
            </StyledTableWrapper>
          </div>
        </StyledContentWrapper>
      </StyledGrid>
    </>
  );
}

export default LandingPage;
