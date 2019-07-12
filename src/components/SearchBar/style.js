import styled from "styled-components";

export const SearchInput = styled.input`
  width: 70%;
  padding: 20px;
  font-size: 18px;
  outline: none;
  border: 1px solid transparent;
  background-color: #f6f6f6;
  border-radius: 7px;
  transition: 0.5s all;
  margin: 20px 0px;
  &:hover,
  &:focus {
    border: 1px solid gray;
  }
`;
