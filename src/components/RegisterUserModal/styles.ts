import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const RegisterUserForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Label = styled.h1`
    font-weight: bold;
    color: #028ed2;
    margin-bottom: 10px;
`;
export const RegisterButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border: none;
    background-color:#028ed2;
    color: #fff;
    border-radius: 5px;
`;
export const CloseButton = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
`;