import axios from "axios"

const getRepositories = async (username) => {
    try {
        const url = `https://api.github.com/users/${username}/repos`
        const data = await axios.get(url)
        
        return data
    } catch (error) {
        return {status: error}
    }
}

export default getRepositories