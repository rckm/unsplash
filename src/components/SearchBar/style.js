import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 20px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  background-color: #fff;
  transition: 0.5s all;
  margin: 20px 0px;
  &:focus {
    box-shadow: 6px 5px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const SearchButton = styled.button`
  border: none;
  padding: 14px;
  margin-left: 20px;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
  transition: 0.5s all;
  font-size: 18px;
  background-color: #4f5b66;
  color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
  &:hover {
    background-color: #fbb017;
  }
`;

export const Error = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
  font-family: "Roboto", sans-serif;
`;
