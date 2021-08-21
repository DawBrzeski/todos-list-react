import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display:none; 
    `}
`;

export const Content = styled.span`
${({ done }) => done && css`
    text-decoration: line-through;
`}
`;

export const Button = styled.button`
    border: none;
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.color.white};;
    padding: 0;
    cursor: pointer;

${({ toggleDone }) => toggleDone && css`
background: ${({ theme }) => theme.color.forestGreen};;

&:hover {
    filter: brightness(110%);
    }
&:active: {
    filter: brightness(120%);

}

`}
${({ remove }) => remove && css`
background: ${({ theme }) => theme.color.crimson};

&:hover {
    filter: brightness(110%);
    }
&:active: {
    filter: brightness(120%);

}
`}


`;