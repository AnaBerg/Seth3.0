import styled from 'styled-components';

export const StyledModal = styled.div`
  background-color: #fafafc;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: auto;
  height: 200px;
  margin-top: 60px;
  margin-left: 1095px;
  visibility: hidden;
`;

export const StyledPopUp = styled.div`
  background-color: #fafafc;
  width: 200px;
  box-shadow: 5px 5px 5px #888888;
  border-radius: 5px;
`;

export const StyledHeader = styled.header`
  padding: 5px;
`;

export const StyledTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: #ff9023;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: #fafafc;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 16px;
  text-align: left;
  margin: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #d9d9d9;
  }
`;

export const StyledLine = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px #00000036;
  background-color: #fafafc;
`;
