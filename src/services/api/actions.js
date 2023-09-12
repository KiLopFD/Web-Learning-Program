import { domain } from "./domains"

const api_url = 'api'
/**
 * Exercise API
 */

export const get = async (urlRoute, setData) => {
    domain.get(`${api_url}${urlRoute}`)
        .then(async (res) => {
            const data = await res.data
            setData(data);
        })
        .catch((err) => {
            console.log(err);
        })
}


export const post = async (urlRoute, setData, options = {}) => {
    domain.post(`${api_url}/${urlRoute}`, options)
        .then(async (res) => {
            const data = await res.data
            console.log(res.data)
            setData(data)
        }).catch((err) => {
            console.error(err)
        })
}