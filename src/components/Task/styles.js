import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    width: calc(100% - 86px);
    background-color: #21212b;
    height: 3em;
    margin-top: .5em;
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #fff;
    border-left: 6px solid #f95738;
    border-radius: 2px 0 0 2px;
    padding-left: 50px;
    justify-content: space-between;
    padding-right: 30px;

    label{
        cursor: pointer;
        position: relative;

        &::before{
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #5e6569;
            left: -2em;
        }

        &::after{
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background-color: #21212b;
            left: -31px;
            top: 1px;
        }
    }

    input[type="checkbox"]:checked ~ label::before{
        background-color: #f95738;
    }

    input[type="checkbox"]:checked ~ label::after{
        display: none;
    }

    .trash{
        cursor: pointer;
    }

    input[type="checkbox"]{
        display: none;
    }

    .inputChecked{
        position: absolute;
        width: 13px;
        top: 16px;
        left: 22px;
        display: none;
    }

    input[type="checkbox"]:checked ~ .inputChecked{
        display: block;
    }
`