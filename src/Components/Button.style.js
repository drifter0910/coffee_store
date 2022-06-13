import styled from "styled-components";
export const Button = styled.button`
  background-color: var(--label);
  border: none;
  margin: 0;
  padding: 1rem 3rem;
  align-items: center;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
`;
