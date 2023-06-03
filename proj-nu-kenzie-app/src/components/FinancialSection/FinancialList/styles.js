import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  min-width: clamp(.625rem, 100%, 28.125rem);
  max-width: 35rem;
  padding: 0 1rem;
  margin: 2.4375rem auto;

  h2 {
    margin-top: 2.4375rem;
  }
 
`;
