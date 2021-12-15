import styled from 'styled-components';

export const Container = styled.li`
    width: 100%;
    background-color: white;
    color: #028ed2;
    font-weight: bold;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 9px 47px -10px rgba(0,0,0,0.51);
    margin-bottom: 5px;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
export const Wrapper = styled.div`
    display: flex;
`;
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Name = styled.strong`
    color: #5d5d5d;
    font-size: 16px;
`;
export const Username = styled.strong`
    height: fit-content;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #d2d2d2;
    margin-right: 10px;
`;
export const CreatedAt = styled.span`
    color: #9ac840;
    font-size: 10px;
`;
export const Email = styled.span`
    font-size: 12px;
    color: #7b7c7c;
`;
export const ButtonExcludeContainer = styled.button`
    border: none;
    background: transparent;
    color: red;
`;
export const Icon = styled.img`
    
`;