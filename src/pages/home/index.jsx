import { Container } from './styles'
import Seacher from '../../components/Searcher'

const Home = () => {
    return (
        <Container>
            <Seacher placeholder='Enter with your github username'/>
        </Container>
    )
}

export default Home