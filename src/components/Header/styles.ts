import styled from 'styled-components';

export const Container = styled.div`
    background-color: #028ed2;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px;
    -webkit-box-shadow: -1px 5px 6px -5px #000000; 
    box-shadow: -1px 5px 6px -5px #000000;
`;
export const LogoBtnContainer = styled.button`
    background: transparent;
    outline: none;
    border: none;
    width: fit-content;
    height: fit-content;
`;
export const NavMenu = styled.div`
    width: 80%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    box-shadow: -1px 5px 6px -5px #000000;
`;
export const RegisterButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: bold;
    background-color: #ffffff;
    color: #028ed2;
    box-shadow: -1px 5px 6px -5px #000000;
`;