import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:before {
    background: hsla(0, 0%, 100%, 0.7);
  }
  &:after {
    content: "";
    font-size: 48px;
    width: 1em;
    height: 1em;
    border: 2px solid #ccc;
    /* border-top-color: #ea4c89; */
    border-top-color: slategray;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`;
