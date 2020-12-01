import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: auto;
  display: flex;
  margin-top: 60px;
  margin-left: 1100px;
  visibility: hidden;
`;

export const StyledMenuDropdown = styled.div`
  background-color: #ff9023;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const StyledButton = styled.button`
  background-color: #ff9023;
  color: #fafafc;
  font-family: 'Baloo Tamma 2', cursive;
  border: none;
  outline: none;
  transition: background-color 0.2s;
  font-size: 20px;
  height: 60px;
  text-align: right;
  padding-right: 10px;

  &:hover {
    background-color: #b06612;
  }
`;
