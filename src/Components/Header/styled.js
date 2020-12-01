import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme, color }) => theme.colors[color]};
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  box-shadow: 0px 0px 10px 5px #00000036;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
`;

export const StyledLogo = styled.a`
  text-decoration: none;
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-left: 15px;

  cursor: pointer;
`;

export const StyledForm = styled.form`
  margin-right: 40px;
  display: flex;
`;

export const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  outline: none;
  border-radius: 10px 0 0 10px;
  border: none;
  padding: 5px;

  &:focus {
    border: 1px solid black;
  }
`;

export const StyledSearch = styled.button`
  height: 30px;
  width: 40px;
  border-radius: 0 10px 10px 0;
  border: none;
  outline: none;
  background-color: #d9d9d9;
  transition: all 0.2s;

  &:hover {
    background-color: #7d7d7d;
  }
  &:focus {
    background-color: #7d7d7d;
  }
`;

export const StyledAvatar = styled.button`
  outline: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: none;
  background-color: #d9d9d9;
  margin-right: 5px;
  transition: all 0.2s;

  &:hover {
    background-color: #7d7d7d;
  }

  &:focus {
    background-color: #7d7d7d;
  }

  &:hover div {
    visibility: visible;
  }
  &:focus div {
    visibility: visible;
  }
`;

export const StyledMenu = styled.button`
  outline: none;
  height: 60px;
  width: 60px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border: none;

  &:hover {
    background-color: ${({ theme, hover }) => theme.colors[hover]};
  }

  &:focus {
    background-color: ${({ theme, hover }) => theme.colors[hover]};
  }

  &:focus div {
    visibility: visible;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
`;
