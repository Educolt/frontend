// import dependencies
import { ChangeEvent, FormEvent, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { 
    useNavigate,
    useLocation,
} from 'react-router-dom'

// app hooks
import { useAuth } from '../../hooks/useAuth'

// styled-components
import { 
    Container,
    LoginButtton
} from './styles'

// app component
import { Input } from '../Input'

// @types
import { IUser } from '../../@types'

export const Form = (): JSX.Element => {

    let navigate = useNavigate();
    let location = useLocation();

    // destructed app hook return
    const { users, signIn } = useAuth();

    // form inputs states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const user = users.find((user: IUser) => (user.email === email && user.password === password))

        if(email === '') {
            console.log('Por favor digite o usuário.');
            toast.warning('Por favor digite o usuário.');
            return;
        } else if(password === '') {
            console.log('Por favor digite a senha.');
            toast.warning('Por favor digite a senha.');
            return;
        }

        if(user) {
            console.log('Usuário Autenticado.');
            signIn();
            navigate( location.state?.from?.pathname || "/dashboard",{replace: true})
        }  else {
            console.log('Usuário nao encontrado !');
            toast.error('Usuário nao encontrado !');
            return;
        }
    }

    return (
        <Container onSubmit={handleSubmit}>
            <Input 
                label="E-mail" 
                type="email" 
                name="email"
                value={email}
                onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                placeholder="Example@email.com"
            />
            <Input 
                label="Senha" 
                type="password" 
                name="password"
                value={password} 
                onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                placeholder="Digite sua senha."
            />
            <LoginButtton type="submit">
                Login
            </LoginButtton>
            <ToastContainer />
        </Container>
    )
}