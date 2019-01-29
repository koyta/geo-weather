import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-flow: column nowrap;

  height: 100%;
  width: 100%;

  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 525px) and (max-width: 1023px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding-left: 64px;
    padding-right: 64px;
  }

  @media (min-width: 1280px) {
    padding-left: 100px;
    padding-right: 100px;

    margin: 0 auto;
    width: 1024px;
  }
`;
