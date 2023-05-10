import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 50vw;
    gap: 2.6em;
    border-bottom: 2px solid #c3c3c5;
    padding-bottom: 1.4em;
    border-radius: 2px;

    button{
        font-family: 'Fredoka', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 6px;
        outline: 0;
        border: 0;
        background-color: #9f3e2f;
        color: #a3a3a6;
        font-weight: 400;
        width: 130px;
        cursor: not-allowed;
        padding-bottom: 2px;
    }

    button.notEmpty{
        background-color: #f95738;
        color: #ffffff;
        cursor: pointer;
    }
`