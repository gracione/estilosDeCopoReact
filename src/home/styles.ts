import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:5px;
    `;

export const Nav = styled.div`
    width:100%;
    height:10vh;
    border-radius:5px;
    background:#483D8B;
    color:white;

    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:30px;
    font-weight: bold;

    ul{
        display:flex;
        justify-content: space-around;
    }
    li{
        margin-left:30px;
        display:block;
    }
    a{
        color: white;
        text-decoration: none;
    }
`;

export const Header = styled.div`
    width:100%;
    height:75vh;

    background:pink;
`;

export const Footer = styled.div`
    color:white;
    width:100%;
    height:10vh;

    background:blue;
    display:flex;
    justify-content: space-around;
    align-items: center;
    li{
        display:flex;
        flex-direction: column;
    }
    `;
