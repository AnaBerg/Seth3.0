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
  background-color: grey;
  height: 50px;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
`;

export const StyledInput = styled.input`
  height: 25px;
  width: 100px;
  outline: none;
  border-radius: 5px 0 0 5px;
  border: none;
  padding: 5px;
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
