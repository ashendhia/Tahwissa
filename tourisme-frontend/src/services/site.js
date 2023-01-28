import axios from 'axios'
const baseUrl = '/api/sites'

const get = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}


export default { get }