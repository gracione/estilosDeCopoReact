import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:20px;
    `;

export const Copo = styled.div`
    width:25vh;
    height:30vh;
    border:solid;
    background:white;
    margin-top: 1vh;
    margin-bottom: 1vh;

    img{
        width:100%;
    }
    .titulo-produto{
        background:red;
        font-weight: 300;

        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    .carrinho{
        width:5vh;
        height:5vh;
        background:white;
        border:solid green;
        border-radius:20px;
    }
    `;
export const Produtos = styled.div`
    width:95%;
    padding:20px;
    border-radius:5px;
    background:white;

    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
        `;  