import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  max-width: 35rem;
  height: max-content;
  margin: 0.625rem auto;
  padding: 0 1.25rem 0 0;
  background: var(--color-grey-1);
  border-radius: 0.25rem 0rem 0rem 0.25rem;
  border-left: 0.25rem solid var(--color-color-secondary);

  .ContentLeft {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 80%;
    margin: 0.5rem 5%;

    h3 {
      width: 100%;
      max-width: 21.0625rem;
      height: max-content;
    }

    label {
      width: 100%;
      height: 1.6875rem;
      padding-bottom: 0.9375rem;
    }
  }

  .ContentRight {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    justify-content: right;
    gap: 0.5rem;
    margin: 16px 0rem;

    width: 6.25rem;

    label {
      margin-right: 2.5%;
    }
  }
`;
