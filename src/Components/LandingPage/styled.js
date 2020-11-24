import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
`;

export const StyledContentWrapper = styled.section`
  margin: 20px;
`;

export const StyledHeader = styled.header`
  display: flex;
  background-color: #fafafc;
  height: 50px;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

export const StyledWarpper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 10px;
`;

export const StyledText = styled.p`
  font-family: 'Baloo Tamma 2', cursive;
  margin-top: 5px;
`;

export const StyledForm = styled.form`
  display: flex;
  padding-right: 10px;
`;

export const StyledInput = styled.input`
  height: 25px;
  width: 200px;
  outline: none;
  border-radius: 5px 0 0 5px;
  border: none;
  padding: 5px;
  border: 0.5px solid #d9d9d9;
`;

export const StyledSearch = styled.button`
  height: 25px;
  width: 30px;
  border-radius: 0 5px 5px 0;
  border: none;
  outline: none;
  background-color: #d9d9d9;
  transition: all 0.2s;

  &:hover {
    background-color: #7d7d7d;
  }
`;

export const StyledLine = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
`;
