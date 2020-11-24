import React from 'react';

import { PersonOutline, SearchOutline } from '@styled-icons/evaicons-outline';

import {
  StyledGrid,
  StyledContentWrapper,
  StyledHeader,
  StyledWarpper,
  StyledText,
  StyledForm,
  StyledInput,
  StyledSearch,
  StyledLine,
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
              <StyledLine />
            </StyledHeader>
            <StyledLine />
            <section></section>
          </div>
        </StyledContentWrapper>
      </StyledGrid>
    </>
  );
}

export default LandingPage;
