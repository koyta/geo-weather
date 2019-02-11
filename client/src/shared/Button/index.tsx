import * as React from "react";

import { Theme } from "../../theme";
import { StyledButton } from "./StyledButton";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  onClick?: (e: React.SyntheticEvent) => void;
  label: string;
  theme?: Theme;
  primary?: boolean;
}

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
