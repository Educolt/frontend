import styled from 'styled-components';

export const Container = styled.form`
    margin: 10px 0px;
`;
export const LoginButtton = styled.button`
    width: 100%;
    padding: 10px 10px;
    background-color: #028ed2;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;

    &:hover&:focus {
        background-color: #7a7b7b;
        transition: background-color 0.2s ease-in-out;
    }
`;