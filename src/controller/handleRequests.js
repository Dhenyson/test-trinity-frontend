import getUser from "../services/getUser";
import getRepositories from "../services/getRepositories";

const getFullData = async ( username ) => {
    try {
        const user = await getUser(username)
        const repositories = await getRepositories(username)
    
        if (user.status === 200 && repositories.status === 200){
            return {
                status: 200,
                user: user.data,
                repositories: repositories.data
            }
        } else {
            return {
                status: 'error'
            }
        }
    } catch (error) {
        return { status: 'error '}
    }
}

export default getFullData