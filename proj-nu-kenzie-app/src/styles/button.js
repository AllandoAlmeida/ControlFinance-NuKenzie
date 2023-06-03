import styled from "styled-components";

export const StyledButtonInsert = styled.button`
  width: 100%;
  height: 48px;
  background-color: var(--color-color-primary);
  border-radius: 8px;
  padding: 13px, 20px, 13px, 20px;

  font-family: var(--Font-Secundary);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-white);
`;

export const StyledButtonDelete = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 8px;
  font-weight: 400;
  line-height: 1.125rem;

  width: 49px;
  height: 19px;
  background: var(--color-grey-2);
  color: var(--color-grey-4);

  border: 1.4px solid var(--color-grey-2);
  border-radius: 2px;
`;
