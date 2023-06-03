import styled from "styled-components";

export const StyledSection = styled.ul`
  width: 100%;
  max-width: 35rem;
  margin: 2.4375rem auto;

  h2 {
    margin-top: 2.4375rem;
    width: 100%;
    height: max-content;
  }
`;

export const StyledList = styled.ul`
  ${({ cardCount }) =>
    cardCount > 5
      ? `
    height: 31.875rem;
    overflow: hidden;
    overflow-y: scroll;
  `
      : `
    height: auto;
    overflow: visible;
    overflow-y: initial;
  `}
  @media (max-width: 47.9375rem) {
    height: auto;
    overflow: visible;
    overflow-y: initial;
  }
`;
