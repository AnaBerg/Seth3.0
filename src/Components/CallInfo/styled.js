import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const StyledLink = styled.a`
  font-family: 'Baloo Tamma 2', cursive;
  text-decoration: none;
  color: black;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;
