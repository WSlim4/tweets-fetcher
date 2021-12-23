import styled, { css } from "styled-components";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 45px 40px 45px 40px;

    .handler-div {
        margin-top: 25vh;
    }

    .container-wrapper {
        width: 40%;
        padding: 10px;
        border: 1px solid #1DA1F2;
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
        props.bottom &&
        css`
        justify-content: space-between;
    `};

    ${props =>
        props.middle &&
        css`
      justify-content: center;
      height: 400px;
      padding: 8px 0 8px 0;
      overflow: auto;

      margin: 3vh 0 3vh 0;
      
      ::-webkit-scrollbar {
        width: 20px;
      }

      ::-webkit-scrollbar-track {
         box-shadow: inset 0 0 5px grey; 
         border-radius: 10px;
      }
 
      ::-webkit-scrollbar-thumb {
         background: #1DA1F2; 
         border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
         background: #1DA1F2; 
       }
    `};
`

export { MainContainer, Container };