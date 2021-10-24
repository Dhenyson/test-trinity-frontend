import { Container } from "./styles";
import img from '../assets/images/no-found.png'

const NotFound = () => {
    return (
        <Container>
            <img src={img} alt='No found'/>
            <h1>No found</h1>
        </Container>
    )
}

export default NotFound