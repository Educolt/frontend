// import dependencies
import Modal from 'react-modal';
import { FormEvent, useState, ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// styled-components
import { 
    Container, 
    Label, 
    RegisterUserForm,
    RegisterButton,
    CloseButton
} from './styles'

// assets
import exclude from '../../assets/exclude.svg'

// app components
import { Input } from '../../components/Input';

//@types
import { IModalProps, IUser } from '../../@types';

// import service api
import { api } from '../../services/api';

// app hook
import { useAuth } from '../../hooks/useAuth';

Modal.setAppElement("#root");

export const RegisterUserModal = ({modalIsOpen, callback}: IModalProps): JSX.Element => {

    const {updateUser, users} = useAuth();

    // form input states
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const data = {
            name,
            username,
            password,
            email
        }

        if((email === '' || password === '') || (name === '' || username === '')) {
            console.log("Por favor preencha todos os inputs.");
            toast.warning("Por favor preencha todos os inputs !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }

        // verify if email already registered
        const exist = users.find((user:IUser) => user.email === email);
        if(exist) {
            console.log("E-mail já cadastrado !");
            toast.warning("E-mail já cadastrado !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return;
        }

        await api.post('/user',data);

        callback();
        updateUser();
    }

    return (
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={callback}
            overlayClassName='react-modal-overlay'
            className="react-modal-content"
        >
            <ToastContainer />
            <Container>
                <CloseButton onClick={callback}>
                    <img src={exclude} alt=""/>
                </CloseButton>
                <Label>
                    Cadastrar novo usuário
                </Label>
                <RegisterUserForm onSubmit={handleSubmit}>
                    <Input 
                        label="Nome completo" 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                        placeholder="Digite seu nome completo."
                    />
                    <Input 
                        label="Nome de usuário" 
                        type="text"
                        name="username"
                        value={username}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
                        placeholder="Digite seu usuário."
                    />
                    <Input 
                        label="E-mail" 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                        placeholder="Digite seu e-mail."
                    />
                    <Input 
                        label="Senha" 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                        placeholder="Digite sua senha."
                    />
                    <RegisterButton type="submit">
                    Cadastrar
                    </RegisterButton>
                </RegisterUserForm>
            </Container>
        </Modal>
    )
}