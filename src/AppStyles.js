import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;

    h1{
        letter-spacing: 5px;
        color: #fff;
        font-size:3em;
    }

    #SearchTask{
        width: 95%;
        margin-top: 1em;
        margin-bottom: 2em;
    }
`

export const UnderInformations = styled.div`
    margin-top: 2em;
    width: 100%;
    background-color: #21212b;
    height: 5em;
    padding-left: 1em;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 1em;
    }

    span{
        color: #f95738;
    }
`