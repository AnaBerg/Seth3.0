import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
`;

export const StyledContentWrapper = styled.div`
  margin: 20px;
`;

export const StyledHeader = styled.header`
  display: flex;
  background-color: #fafafc;
  height: 50px;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledWarpper = styled.div`
  display: flex;
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
  background-color: #fafafc;
`;

export const StyledTableWrapper = styled.div`
  background-color: #fafafc;
  height: 400px;
  width: 100%;
  border-radius: 0 0 5px 5px;
`;

export const StyledTable = styled.table`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  font-family: 'Baloo Tamma 2', cursive;
  overflow-y: auto;
`;

export const StyledTableHeader = styled.tr``;

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
  background-color: #fafafc;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 16px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 0px 10px 5px #00000036;
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
