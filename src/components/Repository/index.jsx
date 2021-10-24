import { Container } from './styles'
import { AiFillStar } from 'react-icons/ai'

const Repository = ({repository}) => {

    return (
        <Container href={repository.html_url} target='_blank' >
            <p><b>{repository.name}</b></p>
            <div>
                <AiFillStar />
                <p>
                    {repository.stargazers_count}
                </p>
            </div>
        </Container>
    )
}

export default Repository