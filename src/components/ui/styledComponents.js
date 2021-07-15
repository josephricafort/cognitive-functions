import styled from "styled-components";

export const SelectorButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  border: 1px solid #333;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-bottom: 5px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  background-color: "#eee";
  ${({ letter, arrFuncState }) =>
    letter === arrFuncState &&
    `
    background-color: #e6ee9c;
    font-weight: 700;
  `};

  &:hover {
    opacity: 1;
  }
`;
