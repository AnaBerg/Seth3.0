import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 300px;
`;

export const StyledContentWrapper = styled.div`
  margin: 10px;
  border-radius: 5px;
`;

export const StyledColor = styled.div`
  background-color: #fafafc;
  padding-bottom: 20px;
  border-radius: 5px;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
`;

export const StyledHeaderDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.p`
  font-family: 'Baloo Tamma 2', cursive;
  margin-top: 5px;
  padding: 5px;
`;

export const StyledBoldText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const StyledLine = styled.hr`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px #00000036;
  background-color: #fafafc;
`;

export const StyledFlexDirection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBoldLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin: 2px;
  margin-top: 10px;
`;

export const StyledLabel = styled.label`
  font-family: 'Baloo Tamma 2', cursive;
  margin-top: 5px;
`;

export const StyledSelect = styled.select`
  height: 35px;
  width: 490px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  border: 0.5px solid #d9d9d9;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 15px;
  cursor: pointer;

  &:focus {
    border: 1px solid black;
  }
`;

export const StyledImportanceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
`;

export const StyledRadio = styled.input`
  margin: 0 5px;
  cursor: pointer;
  height: 15px;
  width: 15px;
`;

export const StyledInputPriority = styled.input`
  height: 35px;
  width: 490px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  border: 0.5px solid #d9d9d9;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 15px;
  cursor: pointer;

  &:focus {
    border: 1px solid black;
  }
`;

export const StyledDivTAG = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

export const StyledSectionTAG = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StyledSelectTAG = styled.select`
  height: 35px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  border: 0.5px solid #d9d9d9;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 15px;
  cursor: pointer;

  &:focus {
    border: 1px solid black;
  }
`;

export const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const StyledInputInfo = styled.input`
  height: 35px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  border: 0.5px solid #d9d9d9;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 15px;

  &:focus {
    border: 1px solid black;
  }
`;

export const StyledTextArea = styled.textarea`
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  border: 0.5px solid #d9d9d9;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 15px;

  resize: vertical;

  &:focus {
    border: 1px solid black;
  }
`;

export const StyledSmallDiv = styled.div`
  background-color: #fafafc;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const StyledSmallHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const StyledButton = styled.a`
  height: 40px;
  width: 100%;
  background-color: #ff9023;
  border: none;
  color: #fafafc;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: all 0.2s;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #b06612;
  }
`;
