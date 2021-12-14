import { Container } from './styles'

import { Header } from '../../components/Header';

export const Dashboard = (): JSX.Element => {
    return (
        <Container>
            <Header />
            <h1>Dashboard</h1>
        </Container>
    )
}