//@types
import { IHeaderProps } from '../../@types';

// styled-components
import { 
    Container, 
    NavMenu,
    LogoBtnContainer, 
    Logo, 
    RegisterButton
} from "./styles";

import { useAuth } from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = ({callback}:IHeaderProps):JSX.Element => {

    // hooks
    let navigate = useNavigate();
    let location = useLocation();
    const { signOut } = useAuth();

    const handleLogout = () => {
        signOut();
        navigate( location.state?.from?.pathname || "/",{replace: true})
    }

    return (
        <Container>
            <NavMenu>
                <LogoBtnContainer onClick={handleLogout}>
                    <Logo src="https://api-avaliacoesempresas.bne.com.br/api/v1/company/pixit/logo" />
                </LogoBtnContainer>
                <RegisterButton type="button" onClick={callback}> + Novo Usuário</RegisterButton>
            </NavMenu>
        </Container>
    )
}