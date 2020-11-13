export const mockSuccess = (value: any) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 2000);
    })
}

export const mockFailure = (value: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 2000);
    })
}