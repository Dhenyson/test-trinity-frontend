import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Container, MyInput } from './styles'

const Seacher = ({placeholder}) => {
    const [ userNameInput, setUserNameInput ] = useState('')

    const history = useHistory()

    const handleInput = (e) => {
        setUserNameInput(e.target.value)
    }

    const searchAction = async (e) => {
        if(e.keyCode === 13){
            setUserNameInput('')
            history.push(`/user/${userNameInput}`)
        }
    }

    return (
        <Container>
            <Link to='/' className='logo'>
                <b>Github</b> <i>Search</i>
            </Link>

            <MyInput
                placeholder={placeholder}
                value={userNameInput}
                onChange={handleInput}
                onKeyDown={searchAction}
            />
        </Container>
    )
}

export default Seacher