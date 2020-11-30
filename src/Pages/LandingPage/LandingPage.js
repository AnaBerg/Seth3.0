import React from 'react';

import { PhoneCallOutline } from '@styled-icons/evaicons-outline';

import { StyledGrid, StyledContentWrapper, StyledPortalButton } from './styled';

import Header from '../../Components/Header';
import CallInfo from './Components/CallInfo';
import CallList from './Components/CallList';

function LandingPage() {
  return (
    <>
      <Header />
      <StyledGrid>
        <CallInfo />
        <StyledContentWrapper>
          <CallList />
        </StyledContentWrapper>
      </StyledGrid>
      <StyledPortalButton>
        <PhoneCallOutline color="#fafafc" width={30} height={30} />
      </StyledPortalButton>
    </>
  );
}

export default LandingPage;
