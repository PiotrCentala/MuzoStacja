import { post } from './fetch'

export const login = (email: string, password: string) => {
    return post('login', {
        customer: { email, password },
    });

}