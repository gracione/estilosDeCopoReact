import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:20px;
    `;

export const Nav = styled.div`
    width:100%;
    height:10vh;
    border-radius:5px;
    background:#483D8B;

    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:30px;

    ul{
        display:flex;
        justify-content: space-around;
    }
    li{
        margin-left:30px;
        display:block;
    }
`;

export const Header = styled.div`
    width:100%;
    height:65vh;

    background:pink;
`;

export const Footer = styled.div`
width:100%;
height:10vh;

background:blue;

    `;
