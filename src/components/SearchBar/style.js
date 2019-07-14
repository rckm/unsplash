import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export const SearchButton = styled.button`
  border: none;
  padding: 20px;
  margin-left: 20px;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
  transition: 0.5s all;
  font-size: 18px;
  background-color: #03a9f4;
  color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
  &:hover {
    background-color: #23b9fc;
  }
`;
