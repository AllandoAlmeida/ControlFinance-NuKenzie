import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:var(--Font-Secundary);
    font-family: "Nunito";
    font-style: normal;

    
}

button{
    cursor: pointer;
    background: transparent;
    border: none;
}

user-select, ol{
    list-style: none
}

a{
    text-decoration: none
}

input{
    border: 0;
    background: transparent;
}
`