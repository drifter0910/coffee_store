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
  @media (max-width: 575.98px) {
    padding: 1rem 1rem !important;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
`;

export const ButtonTrans = styled.button`
  background-color: transparent;
  border: 2px solid white;
  margin: 0;
  font-weight: bold;
  padding: 1rem 2rem;
  align-items: center;
  display: flex;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
  &:focus {
    outline: none;
  }
`;
