import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 70px;
`;

export const StyledCallCard = styled.div`
  display: flex;
  background-color: ${({ theme, color }) => theme.colors[color]};
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const StyledCardInfo = styled.div`
  background-color: #fafafc;
  height: 60px;
  width: 100px;
  margin: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
`;

export const StyledNumber = styled.h3`
  font-family: 'Baloo Tamma 2', cursive;
`;

export const StyledText = styled.p`
  font-family: 'Baloo Tamma 2', cursive;
`;

export const StyledActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  position: sticky;
  top: 232px;
`;

export const StyledLink = styled.a`
  font-family: 'Baloo Tamma 2', cursive;
  text-decoration: none;
  color: black;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
`;

export const StyledStickyDiv = styled.div`
  position: sticky;
  top: 400px;
  margin-left: 10px;
`;

export const StyledTableWrapper = styled.div`
  background-color: #fafafc;
  height: 140px;
  width: 300px;
  border-radius: 0 0 5px 5px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export const StyledHeader = styled.header`
  display: flex;
  background-color: #fafafc;
  height: 40px;
  width: 300px;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

export const StyledWarpper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const StyledLine = styled.hr`
  height: 12px;
  width: 300px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px #00000036;
  background-color: #fafafc;
`;

export const StyledTable = styled.table`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  font-family: 'Baloo Tamma 2', cursive;
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
  transition: all 0.1s;

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
