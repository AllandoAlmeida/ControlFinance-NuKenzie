import styled from 'styled-components';

export const StyledSection = styled.section`
display: flex;
flex-direction: column;
width: 100%;
max-width: 34.375rem;
margin: 2.4375rem auto;
height: 28.25rem;
@media screen and (min-width: 64rem) {
    max-width: 21.875rem;
  }
`
export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
height: max-content;
font-size: 1rem;
width: 100%;
border-radius: .5rem;
`

export const StyledForm = styled.form`

display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 27.1875rem;
  gap: .3125rem;
  min-width: clamp(9.375rem, 100%, 22.1875rem);

  padding: 1.875rem 5%;
  background: var(--color-white);
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 64rem) {
    max-width: 21.875rem;
  }
`







