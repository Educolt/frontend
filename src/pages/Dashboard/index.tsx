// React hooks
import { useState, useEffect } from 'react';
import { 
    useNavigate,
    useLocation,
} from 'react-router-dom'

// styled-components
import { Container, ListContainer } from './styles'

// app components
import { Header } from '../../components/Header';
import { Card } from '../../components/Card'
import { RegisterUserModal } from '../../components/RegisterUserModal';

// @types
import { IUser } from '../../@types';

// app hooks
import { useAuth } from '../../hooks/useAuth'

export const Dashboard = () => {

    let navigate = useNavigate();
    let location = useLocation();

    const { users, isAuthered } = useAuth();

    // list users and modal state
    const [list, setList] = useState([{} as IUser]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // handle register user butto click event
    const handleClick = () => {
        // toggle modal state
        setModalIsOpen(!modalIsOpen);
    }

    // use effect hook to load users
    useEffect(() => {
        setList([...users])
    }, [users]);

    // verify if its auth
    if (isAuthered) {
        return (
            <Container>
                <Header callback={handleClick} />
                <ListContainer>
                    {list.map((user: IUser) => (<Card key={user.id} data={user}/>))}
                </ListContainer>
                <RegisterUserModal modalIsOpen={modalIsOpen} callback={handleClick} />
            </Container>
        )
    } else {
        navigate( location.state?.from?.pathname || "/",{replace: true});
    }
    return <h1>Loading...</h1>
}