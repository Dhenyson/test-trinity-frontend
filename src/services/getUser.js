import axios from "axios"

const getUser = async (username) => {
    try {
        const url = `https://api.github.com/users/${username}`
        const data = await axios.get(url)
        
        return data
    } catch (error) {
        return {status: error}
    }
}

export default getUser