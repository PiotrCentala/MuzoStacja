import { get } from './fetch'

export type detailsFromDatabase = {
    data: Record[],
}
export type Record = {
    id: string,
    isPayed: number,
    firstName: string,
    lastname: string,
    phone: string,
    visittypeName: string
}


export const getDetails = (day: string) => {
    return get(day) as Promise<detailsFromDatabase>;
}