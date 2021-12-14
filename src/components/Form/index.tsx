import { 
    Container,
} from './styles'

import { Input } from '../Input'

export const Form = (): JSX.Element => {
    return (
        <Container>
            <Input 
                label="E-mail" 
                type="email" 
                name="email" 
                placeholder="Example@email.com"
            />
            <Input 
                label="Senha" 
                type="password" 
                name="password" 
                placeholder="Digite sua senha."
            />
        </Container>
    )
}