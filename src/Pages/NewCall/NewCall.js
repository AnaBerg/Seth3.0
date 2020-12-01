import React from 'react';

import {
  StyledForm,
  StyledColor,
  StyledHeader,
  StyledHeaderDiv,
  StyledText,
  StyledLine,
  StyledContentWrapper,
  StyledFormDiv,
  StyledFlexDirection,
  StyledBoldLabel,
  StyledBoldText,
  StyledLabel,
  StyledSelect,
  StyledImportanceDiv,
  StyledRadio,
  StyledSection,
  StyledInputPriority,
  StyledDivTAG,
  StyledSectionTAG,
  StyledInfoDiv,
  StyledInputInfo,
  StyledTextArea,
  StyledSmallDiv,
  StyledSmallHeader,
  StyledButton,
} from './styled';

import {
  ClipboardOutline,
  PersonOutline,
  CalendarOutline,
  PeopleOutline,
  PlusOutline,
  FileOutline,
} from '@styled-icons/evaicons-outline';

import Header from '../../Components/Header';

function NewCall() {
  return (
    <>
      <Header />

      <StyledForm action="submit">
        <StyledContentWrapper>
          <StyledColor>
            <StyledHeader>
              <StyledHeaderDiv>
                <ClipboardOutline color="#ff9023" width={24} height={24} />
                <StyledText>Novo chamado</StyledText>
              </StyledHeaderDiv>
              <StyledHeaderDiv>
                <PersonOutline color="black" width={18} height={18} />
                <StyledText>Ana Berg</StyledText>
                <CalendarOutline color="black" width={18} height={18} />
                <StyledText>30/11/2020 10:24</StyledText>
              </StyledHeaderDiv>
            </StyledHeader>
            <StyledLine />
            <StyledFlexDirection>
              <StyledFormDiv>
                <StyledBoldLabel htmlFor="client">Cliente</StyledBoldLabel>
                <StyledSelect name="client" id="client">
                  <option value>-- Selecione --</option>
                  <option value="client1">CLIENTE 1</option>
                  <option value="client2">CLIENTE 2</option>
                  <option value="client3">CLIENTE 3</option>
                  <option value="client4">CLIENTE 4</option>
                </StyledSelect>
                <StyledBoldLabel htmlFor="solicitation">
                  Solicitação
                </StyledBoldLabel>
                <StyledSelect name="solicitation" id="solicitation">
                  <option value>-- Selecione --</option>
                  <option value="personalApproach">Abordagem pessoal</option>
                  <option value="adeuqecy">Adequação</option>
                  <option value="chat">Chat</option>
                  <option value="discoveredDemand">Demanda descoberta</option>
                  <option value="Email">E-mail</option>
                  <option value="onlineReunion">Reunião online</option>
                  <option value="telephone">Telefone</option>
                  <option value="whatsapp">WhatsApp</option>
                </StyledSelect>
              </StyledFormDiv>
              <StyledFormDiv>
                <StyledBoldLabel htmlFor="requester">
                  Solicitante
                </StyledBoldLabel>
                <StyledSelect name="requester" id="requester">
                  <option value>-- Selecione --</option>
                  <option value="stalkeholder1">Stalkeholder 1</option>
                  <option value="stalkeholder2">Stalkeholder 2</option>
                  <option value="stalkeholder3">Stalkeholder 3</option>
                  <option value="stalkeholder4">Stalkeholder 4</option>
                </StyledSelect>

                <StyledBoldLabel htmlFor="occurrence">
                  Tipo de ocorrência
                </StyledBoldLabel>
                <StyledSelect name="occurrence" id="occurrence">
                  <option value>-- Selecione --</option>
                  <option value="learning">Aprendizado</option>
                  <option value="backup">Backup</option>
                  <option value="incident">Incidente</option>
                  <option value="information">Informação</option>
                  <option value="intelligenceInnovation">
                    Inteligência e inovação
                  </option>
                  <option value="improvement">Melhoria</option>
                  <option value="ambientMonitoring">
                    Monitoramento de ambiente
                  </option>
                  <option value="budget">Orçamento</option>
                  <option value="problem">Problema</option>
                  <option value="project">Projecto</option>
                  <option value="livticloud">Proposta LIVTICLOUD</option>
                  <option value="livtiguard">Proposta LIVTIGUARD</option>
                  <option value="serviceRequest">Requisição de serviço</option>
                  <option value="clientSuccess">Sucesso do cliente</option>
                  <option value="BKP">Teste BKP</option>
                </StyledSelect>
              </StyledFormDiv>
            </StyledFlexDirection>
            <StyledImportanceDiv>
              <div>
                <StyledBoldText>Impacto</StyledBoldText>
                <StyledSection>
                  <StyledRadio type="radio" name="impact" id="impact" />
                  <StyledLabel htmlFor="">Alto</StyledLabel>
                  <StyledRadio type="radio" name="impact" id="impact" />
                  <StyledLabel htmlFor="">Médio</StyledLabel>
                  <StyledRadio type="radio" name="impact" id="impact" />
                  <StyledLabel htmlFor="">Baixo</StyledLabel>
                </StyledSection>
              </div>
              <div>
                <StyledBoldText>Urgência</StyledBoldText>
                <StyledSection>
                  <StyledRadio type="radio" name="urgency" id="urgency" />
                  <StyledLabel htmlFor="">Alto</StyledLabel>
                  <StyledRadio type="radio" name="urgency" id="urgency" />
                  <StyledLabel htmlFor="">Médio</StyledLabel>
                  <StyledRadio type="radio" name="urgency" id="urgency" />
                  <StyledLabel htmlFor="">Baixo</StyledLabel>
                </StyledSection>
              </div>
              <div>
                <StyledBoldText>Prioridade</StyledBoldText>
                <StyledInputPriority
                  name="priority"
                  id="priorty"
                  disabled="disable"
                  placeholder="-- Indefinido --"
                />
              </div>
            </StyledImportanceDiv>
            <div>
              <StyledDivTAG>
                <StyledSectionTAG>
                  <StyledBoldLabel htmlFor="tag">TAG</StyledBoldLabel>
                  <StyledSelect name="tag" id="tag">
                    <option value="includ">Incluir Tag</option>
                    <option value="register">Não registrado</option>
                    <option value="non-aplicable">Não aplicavel</option>
                  </StyledSelect>
                </StyledSectionTAG>
                <StyledSectionTAG>
                  <StyledBoldLabel htmlFor="relatedTag">
                    TAGS relacionada
                  </StyledBoldLabel>
                  <StyledSelect name="relatedTag" id="relatedTag">
                    <option value="">Exemplo</option>
                  </StyledSelect>
                </StyledSectionTAG>
              </StyledDivTAG>
              <StyledInfoDiv>
                <StyledBoldLabel htmlFor="subject">Assunto</StyledBoldLabel>
                <StyledInputInfo
                  type="text"
                  placeholder="Informe o assunto do chamado"
                />
                <StyledBoldLabel htmlFor="description">
                  Descrição
                </StyledBoldLabel>
                <StyledTextArea
                  name="description"
                  id="description"
                  cols="30"
                  rows="3"
                  placeholder="Descreva o chamado"
                ></StyledTextArea>
                <StyledBoldLabel htmlFor="observation">
                  Observação interna
                </StyledBoldLabel>
                <StyledTextArea
                  name="observation"
                  id="observation"
                  cols="30"
                  rows="3"
                  placeholder="Observações exclusivas para técnicos"
                ></StyledTextArea>
              </StyledInfoDiv>
            </div>
          </StyledColor>
        </StyledContentWrapper>

        <StyledContentWrapper>
          <StyledSmallDiv>
            <StyledSmallHeader>
              <PeopleOutline color="#ff9023" width={24} height={24} />
              <StyledText>Envolvidos</StyledText>
              <a href="">
                <PlusOutline color="black" width={18} height={18} />
              </a>
            </StyledSmallHeader>
            <StyledLine />
            <StyledText>Ana Berg</StyledText>
          </StyledSmallDiv>

          <StyledSmallDiv>
            <StyledSmallHeader>
              <FileOutline color="#ff9023" width={24} height={24} />
              <StyledText>Anexos</StyledText>
              <a href="">
                <PlusOutline color="black" width={18} height={18} />
              </a>
            </StyledSmallHeader>
            <StyledLine />
            <StyledText>Sem anexos</StyledText>
          </StyledSmallDiv>
          <StyledButton href="http://192.168.88.41:3000/">
            Abrir chamado
          </StyledButton>
        </StyledContentWrapper>
      </StyledForm>
    </>
  );
}

export default NewCall;
