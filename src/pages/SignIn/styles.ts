import styled from 'styled-components';

export const Container = styled.div`
    background-color: #028ed2;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignInContainer = styled.div`

    background-color: #ffffff;
    padding: 20px 40px;
    padding-bottom: 10px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: fit-content;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

`;

export const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    border-radius: 50%;
    border: 1px solid #028ed2;
    height: 80px;
    width: 80px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;