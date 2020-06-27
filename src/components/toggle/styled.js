import styled from "styled-components";

export const ToggleContainer = styled.a`
  //   position: relative;
  // width: 8rem;
  // height: 4rem;
  cursor: pointer;
  width: 54px;
  height: 54px;
  padding-top: 5px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
  background-color: #fff;
  margin-bottom: 10px;
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      display: ${({ lightTheme }) => (lightTheme ? "none" : "")};
      transition: ${({ lightTheme }) =>
        lightTheme ? "" : "opacity 1s ease-in-out"};
    }

    // moon icon
    &:nth-child(2) {
      display: ${({ lightTheme }) => (lightTheme ? "" : "none")};
      transition: ${({ lightTheme }) =>
        lightTheme ? "opacity 1s ease-in-out" : ""};
    }
  }
`;
