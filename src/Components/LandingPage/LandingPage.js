import React from 'react';

import { PersonOutline, SearchOutline } from '@styled-icons/evaicons-outline';

import {
  StyledGrid,
  StyledContentWrapper,
  StyledHeader,
  StyledForm,
  StyledInput,
  StyledSearch,
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
              <div>
                <PersonOutline color="#ff9023" width={24} height={24} />
                <p>Meus Chamados</p>
              </div>
              <StyledForm action="">
                <StyledInput type="text" />
                <StyledSearch type="submit">
                  <SearchOutline color="#fafafc" width={18} height={18} />
                </StyledSearch>
              </StyledForm>
            </StyledHeader>
          </div>
        </StyledContentWrapper>
      </StyledGrid>
    </>
  );
}

export default LandingPage;
