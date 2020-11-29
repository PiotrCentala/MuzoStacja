import { get } from './fetch'

export type StatsFromDatabase = {
    data: Stats[],
}
export type Stats = {
    total: number,
    month: number,
    year: string,
}


export const getStats = () => {
    return get('reports_paymentsForYear_BI_ALL') as Promise<StatsFromDatabase>;
}