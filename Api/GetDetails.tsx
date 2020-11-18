import { get } from './fetch'

export type detailsFromDatabase = {
    id: string,
    isPayed: number,
    firstName: string,
    lastName: string,
    phone: string,
    visittypeName: string
}

export const getRecords = (day: string) => {
    return get(day) as Promise<detailsFromDatabase>;
}