import React from 'react';

import {
  HomeOutline,
  ClockOutline,
  StarOutline,
  PersonOutline,
  FileTextOutline,
  MonitorOutline,
} from '@styled-icons/evaicons-outline';

import { StyledMenuDropdown, StyledModal, StyledButton } from './styled';

function MenuDropdown() {
  return (
    <StyledModal>
      <StyledMenuDropdown>
        <StyledButton>
          <HomeOutline color="#fafafc" width={20} height={20} />
          Dashbord
        </StyledButton>
        <StyledButton>
          <ClockOutline color="#fafafc" width={20} height={20} />
          Agendamentos
        </StyledButton>
        <StyledButton>
          <StarOutline color="#fafafc" width={20} height={20} />
          Clientes
        </StyledButton>
        <StyledButton>
          <PersonOutline color="#fafafc" width={20} height={20} />
          Técnicos
        </StyledButton>
        <StyledButton>
          <FileTextOutline color="#fafafc" width={20} height={20} />
          Relatórios
        </StyledButton>
        <StyledButton>
          <MonitorOutline color="#fafafc" width={20} height={20} />
          Dashbord da TV
        </StyledButton>
      </StyledMenuDropdown>
    </StyledModal>
  );
}

export default MenuDropdown;
