// External dependencies
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// components
import { Container, Header } from './styles'
import Searcher from '../../components/Searcher'
import Content from '../../components/Content'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'

// My dependecies
import handleRequests from '../../controller/handleRequests'

const User = () => {
    const [ loading, setLoading ] = useState(false)
    const [ searchError, setSearchError ] =useState(true)
    
    const { username } = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        const requests = async () => {
            setLoading(true)
            const response = await handleRequests(username)

            if(response.status === 200) {
                dispatch({type: 'SET_USER', payload: response.user})
                dispatch({type: 'SET_REPOSITORIES', payload: response.repositories})
                setSearchError(false)
            } else {
                setSearchError(true)
            }

            setLoading(false)
        }
        
        requests()
    },[username, dispatch])


    return (
        <Container>
            <Header>
                <Searcher placeholder='Trinity Soluções'/>
            </Header>

            {loading &&
                <div className='loading'>
                    <Loading />
                </div>
            }

            {searchError
                ? ( <NotFound/> )
                : ( <Content /> )
            }
            
        </Container>
    )
}

export default User