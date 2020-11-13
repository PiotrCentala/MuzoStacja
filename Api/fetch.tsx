import { API_URL } from '../secrets'
import { getToken } from './token'

const getHeaders = async () => {
    const token = await getToken();
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: ``,
    };
    if (token) {
        console.log(token)
        headers.authorization = `${token}`;
    }
    return headers;
}


export const post = async (destination: string, body: any) => {
    const headers = await getHeaders();

    const result = await fetch(`${API_URL}${destination}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    });
    if (result.ok) {
        return await result.json();
    }

    throw { error: result.status };
};

export const get = async (destination: string) => {
    const headers = await getHeaders();

    const result = await fetch(`${API_URL}${destination}`, {
        method: 'GET',
        headers,
    })
    if (result.ok) {
        return await result.json();
    }
    throw { error: result.status };
}
