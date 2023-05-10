import { styled } from "styled-components";

export const InputStyle = styled.div`
    width: 100%;

    input{
        border-radius: 5px;
        padding: 15px 15px;
        width: 100%;
        background-color: #21212b;
        outline: 0;
        border: 0;
        color: #fff;
        caret-color: #fff;
        font-weight: bold;

        &::placeholder{
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            color: #676769;
        }
    }

`