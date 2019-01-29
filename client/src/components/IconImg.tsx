import * as React from "react";
import styled from "styled-components";
import { ImgHTMLAttributes } from "react";

export interface IconImgProps extends ImgHTMLAttributes<HTMLElement> {
  inline?: boolean;
  size?: number;
}

const IconImg = styled.img<IconImgProps>`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  align-items: center;
  justify-content: center;

  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

IconImg.defaultProps = {
  size: 24,
  inline: true,
};

export default IconImg;
