import { styled } from "../../theme";

export const StyledButton = styled.button`
  background: none;
  margin: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 8px 12px;
  border-radius: 4px;

  background-color: ${props => props.theme.secondaryColor};
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};

  &:hover {
    background-color: ${props => props.theme.accentColor2};
    border-color: ${props => props.theme.accentColor2};
    color: ${props => props.theme.primaryColor};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: ${props => props.theme.fallbackColor};
    border-color: ${props => props.theme.fallbackColor};
  }

  transition: 0.1s ease-in-out;

  outline: none;
`;
