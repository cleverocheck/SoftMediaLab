import axios from 'axios'

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface ActionData {
    type: string
    url?: string
    data?: object
    method?: MethodType
}

const dataService = () => (next: any) => async (action: ActionData) => {
    const { url, data, type, method = 'GET' } = action
    if (url) {
        const response = await axios.request({
            url: `http://localhost:3001/${url}`,
            data,
            method
        })
        return next({
            type: type,
            data: response.data
        })
    } else {
        const { data, type } = action
        return next({
            type: type,
            data: data
        })
    }
}

export default dataService