import * as React from "react";
import { animated, Spring } from "react-spring";
import Pulse from "../assets/puff.svg";

const spring = {
  from: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 },
  to: { opacity: 1, height: 50, marginTop: 20, marginBottom: 20 },
};

const Loading = () => {
  return (
    <Spring from={spring.from} to={spring.to}>
      {props => <animated.img src={Pulse} alt="" style={props} />}
    </Spring>
  );
};

export default Loading;
