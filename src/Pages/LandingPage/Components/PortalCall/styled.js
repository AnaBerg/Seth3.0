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
  margin-left: 800px;
  margin-top: 115px;
  visibility: hidden;
`;

export const StyledBoxShadow = styled.div`
  box-shadow: 5px 5px 5px #888888;
  width: 500px;
`;

export const StyledHeader = styled.header`
  display: flex;
  background-color: white;
  height: 50px;
  width: 500px;
  align-items: center;
  border-radius: 5px 5px 0 0;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.p`
  font-family: 'Baloo Tamma 2', cursive;
  margin-top: 5px;
  margin-left: 5px;
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

  &:focus {
    border: 1px solid black;
  }
`;

export const StyledSearch = styled.button`
  height: 25px;
  width: 30px;
  border-radius: 0 5px 5px 0;
  border: none;
  outline: none;
  background-color: #d9d9d9;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7d7d7d;
  }

  &:focus {
    background-color: #7d7d7d;
  }
`;

export const StyledLine = styled.hr`
  height: 12px;
  border: 0;
  width: 500px;
  box-shadow: inset 0 12px 12px -12px #00000036;
  background-color: #fafafc;
`;

export const StyledTableWrapper = styled.div`
  background-color: white;
  height: 350px;
  width: 500px;
  border-radius: 0 0 5px 5px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
`;

export const StyledTableHeader = styled.tr`
  margin-bottom: 10px;
`;

export const StyledTicket = styled.th`
  width: 200px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledClient = styled.th`
  width: 200px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledSubject = styled.th`
  width: 500px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledStatus = styled.th`
  width: 100px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledPriority = styled.th`
  width: 100px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledButtonCall = styled.button`
  border: none;
  outline: none;
  height: 30px;
  background-color: #fafafc;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 16px;
  transition: background-image 0.1s;

  &:hover {
    background-image: linear-gradient(to bottom, #fafafc, #d9d9d9);
  }

  &:focus {
    background-image: linear-gradient(to bottom, #fafafc, #ff9023);
  }
`;

export const StyledTicketVar = styled.td`
  width: 200px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledClientVar = styled.td`
  width: 200px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledSubjectVar = styled.td`
  width: 500px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledStatusVar = styled.td`
  width: 100px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledPriorityVar = styled.td`
  width: 100px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
