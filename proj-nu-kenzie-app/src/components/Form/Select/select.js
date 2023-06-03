import styled from 'styled-components';

export const StyledSelect = styled.select`
display: flex;
justify-content: space-between;
height: 52px;
font-size: 1rem;
width: 100%;
border-radius: 8px;
border: 2px solid var(--color-grey-1);
background: var(--color-grey-1);
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 26px;
color: var(--color-grey-3)
`

export const StyledOption = styled.option`
display: flex;
justify-content: space-between;
height: 52px;
font-size: 1rem;
width: 100%;
border-radius: 8px;
border: 2px solid var(--color-grey-1);
background: var(--color-grey-1);
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 30px;
color: var(--color-grey-3)
`