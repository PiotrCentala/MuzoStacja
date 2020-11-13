import { mockSuccess, mockFailure } from './mock'

export const Login = (email: string, password: string, SouldSucceed = true) => {
    console.log(email, password);
    if (!SouldSucceed) {
        return mockFailure({ error: 500, message: 'Something went Wrong!' })
    }
    return mockSuccess({ auth_token: 'succesfull_fake_token' });
}