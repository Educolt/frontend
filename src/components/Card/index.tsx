// styled-components
import { 
    Container, 
    Wrapper, 
    UserInfo, 
    Name, 
    Username, 
    Email, 
    CreatedAt, 
    ButtonExcludeContainer, 
    Icon
} from './styles';

// assets
import exclude from '../../assets/exclude.svg'

// import api service
import { api } from '../../services/api'

export const Card = ({...rest}): JSX.Element => {

    // handle exclude user button click event
    const handleExcludeUserClick = async () => {
        try {
            await api.delete(`/user/${rest.data.id}`) 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Wrapper>
                <Username>
                    {rest.data.username}
                </Username>
                <UserInfo>
                    <Name>
                        {rest.data.name}
                    </Name>
                    <Email>
                        {rest.data.email}
                    </Email>
                    <CreatedAt>
                        {
                            new Date(Date.parse(rest.data.createdAt)).toDateString()
                        }
                    </CreatedAt>
                </UserInfo>
            </Wrapper>
            <ButtonExcludeContainer onClick={() => handleExcludeUserClick()}>
                <Icon src={exclude} />
            </ButtonExcludeContainer>
        </Container>
    )
}