import styled from "styled-components";

export const StyledBalance = styled.ul`
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: max-content;
  padding: 0.3125rem 5%;
  gap: 1.5625rem;
  margin-top: 1.125rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 64rem) {
    max-width: 21.875rem;
  }
`;

export const StyledBalanceLi = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 550px;
  height: max-content;
  font-size: 1rem;
  border-radius: 0.5rem;

  h3{
  font-size: 16px;
  font-weight: 700;
  line-height: 1.875rem;
  }

  span {
    color: var(--color-color-primary);
    text-align:end
  }

  .title {
    gap: 3.125rem;
    height: 1.875rem;
  }
`;
