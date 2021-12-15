// styled-components
import { 
    Container,
    SignInContainer,
    LogoContainer,
    Logo,
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
            </SignInContainer>
        </Container>
    )
}