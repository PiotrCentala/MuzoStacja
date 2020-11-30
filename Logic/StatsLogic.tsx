import { Stats } from '../Api/GetStats'
import Moment from 'moment'
export const GetDatasetIncomeArray = (input: Stats[], counter: Number) => {
    type Response = {
        Month: string,
        Income: number,
        Year: string,
    }
    const response = [] as Response[];

    for (var i = 0; i < counter; i++) {
        const a = input.pop();
        if (a?.month != null)
            response.push({ Month: Moment().month(a.month - 1).format("MMMM"), Income: Math.round(a?.total), Year: a.year })
    }
    return response;
}
export const GetDatasetIncomeNumbers = (input: Stats[]) => {
    type Response = {
        Record: {
            Month: string,
            Income: number,
            Year: string,
        }
        ThisMonth: {
            Income: number,
        }
        Average: {
            Income: number,
        }
        Totalt:
        {
            Income: string,
        }
    }
    if (input.length == 0 || input == null) {
        console.log('przerwanie');
        return undefined;
    }
    const data = input.filter((a) => (Number(a.year) > 2018 && Number(a.month) > 5) || Number(a.year) > 2019).reverse();
    const sum = data.map((s) => s.total).reduce((a, b) => Number(a) + Number(b)).toFixed(2);
    const maximum = data.find((a) => a?.total == Math.max(...data.map((num) => num.total)));
    if (maximum == undefined)
        return undefined
    const response: Response = {
        ThisMonth: { Income: data[0].total as number },
        Record: {
            Income: maximum.total,
            Year: maximum.year,
            Month: Moment().month(maximum.month - 1).format("MMMM"),
        },
        Average: {
            Income: Math.round((data.map((z) => z.total).reduce((a, b) => Number(a) + Number(b)) / data.length) * 100) / 100,
        },
        Totalt: {
            Income: sum,
        }
    };
    return response;
}