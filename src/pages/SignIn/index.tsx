import { 
    Container,
    SignInContainer,
    LogoContainer,
    Logo,
    LoginButtton
} from './styles'

import { Form } from '../../components/Form'

export const SignIn = (): JSX.Element => {
    return (
        <Container>
            <SignInContainer>
                <LogoContainer>
                    <Logo src="https://api-avaliacoesempresas.bne.com.br/api/v1/company/pixit/logo" />
                </LogoContainer>
                <Form />
                <LoginButtton>
                    Login
                </LoginButtton>
            </SignInContainer>
        </Container>
    )
}