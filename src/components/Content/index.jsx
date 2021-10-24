import { Container, RepositoriesContainer } from "./styles";
import { useSelector } from "react-redux";
import Repository from "../Repository";
import { RiMapPin2Line } from 'react-icons/ri'
import { BsBox, BsPeopleFill } from 'react-icons/bs'

const Content = () => {

    const user = useSelector(state => state.user)
    const repositories = useSelector(state => state.repositories)

    return (
        <Container>
            <section>
                <img src={user.avatar_url} alt={user.name}/>

                <p style={{margin: '10px'}}>@{user.login}</p>

                <div className='infos'>
                    <div>
                        <RiMapPin2Line />
                        <p>{user.location}</p>
                    </div>
                    <div>
                        <BsBox/>
                        <p>{user.public_repos}</p>
                    </div>
                    <div>
                        <BsPeopleFill />
                        <p>{user.followers}</p>
                    </div>
                </div>
            </section>

            <RepositoriesContainer>
                {repositories.map((item, index)=>(
                    <Repository key={index} repository={item} />
                ))}
            </RepositoriesContainer>
        </Container>
    )
}

export default Content