import styled from "styled-components";

export const ListItemStyle = styled.div`
  figure {
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }
  column-width: 320px;
  column-gap: 25px;
  padding: 10px;
  margin: 0px auto;
  .photo-item {
    margin-bottom: 10px;
    transition: transform 0.5s;
  }

  .photo-item:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  .photo-item img {
    text-align: center;
    border-radius: 10px;
    width: 100%;
    box-shadow: 6px 5px 8px rgba(0, 0, 0, 0.5);
  }
`;

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
