import * as React from "react";
import { styled, Theme } from "../theme";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  onClick?: (e: React.SyntheticEvent) => void;
  label: string;
  theme?: Theme;
  primary?: boolean;
}

const StyledButton = styled.button`
  background: none;
  margin: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${props => props.theme.color.secondaryColor};
  border: ${props => `2px solid ${props.theme.color.secondaryColor}`};
  color: ${props => props.theme.color.primaryColor};

  &:hover {
    border-color: ${props => props.theme.color.primaryColor};
    color: ${props => props.theme.color.primaryColor};
  }

  &:active {
    background-color: ${props => props.theme.color.accentColor};
    border-color: ${props => props.theme.color.accentColor};
  }

  &:disabled {
    background-color: ${props => props.theme.color.fallbackColor};
    border-color: ${props => props.theme.color.fallbackColor};
  }

  transition: 0.1s ease-in-out;

  outline: none;
`;

class Button extends React.Component<ButtonProps, {}> {
  handleClick = (e: React.SyntheticEvent) => {
    if (typeof this.props.onClick === "function") {
      this.props.onClick(e);
    }
  };

  render() {
    const { theme, label, ...rest } = this.props;
    return (
      <StyledButton onClick={this.handleClick} theme={theme} {...rest}>
        {label}
      </StyledButton>
    );
  }
}

export default Button;
