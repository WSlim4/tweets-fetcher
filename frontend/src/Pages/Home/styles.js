import styled, { css } from "styled-components";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 45px 80px 45px 80px;

    .container-wrapper {
        width: 40%;
        padding: 10px;
        border: 1px solid black;
        border-radius: 8px;
    }

    h1{
        color: green;
        margin: 0;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${props =>
        props.middle &&
        css`
      justify-content: center;
      height: 300px;
      padding: 8px 0 8px 0;
    `};
`

export { MainContainer, Container };