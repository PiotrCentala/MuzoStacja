import { mockSuccess, mockFailure } from './mock'
import { getToken } from '../token'

export const getUsers = async (shouldSucceed = true) => {
    const token = await getToken();

    if (token != 'succesfull_fake_token') {
        return mockFailure({ error: 401, message: 'Invalid Request' });
    }

    return mockSuccess({
        users: [
            {
                email: 'test@test.ca',
            },
            {
                email: 'test2@test.ca',
            },
        ],
    });
};