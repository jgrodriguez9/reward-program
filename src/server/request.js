//Note: We set the the endpoint to the api depend the env file
const API_URL = process.env.API_ENPOINT || "http://localhost:5000"



export async function get(path, config = {}) {
    try {
        const response = await fetch(`${API_URL}/${path}`, { ...config })
        if(!response.ok){
            return {
                status: response.status,
                message: response.statusText,
                content: []
            }
        }
        const data = await response.json();
        return {
            status: response.status,
            message: response.statusText,
            content: data
        }
    } catch (error) {
        return {
            status: 500,
            message: 'Server error!',
            content: []
        }
    }
    
}