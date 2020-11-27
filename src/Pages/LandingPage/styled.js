import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
`;

export const StyledContentWrapper = styled.div`
  margin: 20px;
`;

export const StyledPortalButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 50px;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  border: none;
  background-color: #ff9023;
  transition: all 0.2s;
  outline: none;

  &:hover {
    background-color: #b06612;
  }

  &:focus {
    background-color: #b06612;
  }
`;
