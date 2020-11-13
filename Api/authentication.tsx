import { post } from './fetch'

export const Login = (email: string, password: string) => {
    return post('login', {
        customer: { email, password },
    });

}