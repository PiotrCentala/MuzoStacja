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
            Income: number,
        }
    }
    const data = [] as Stats[]
    if (input.length == 0 || input == null) {
        console.log('przerwanie');
        return undefined;
    }
    const sum = Math.round(input.map((s) => s.total).reduce((a, b) => Number(a) + Number(b)));
    for (var i = 0; i < 12; i++) {
        data.push(input?.pop() as Stats);
    }
    const maximum = data.find((a) => a?.total == Math.max(...data.map((num) => num.total)));
    if (maximum == undefined)
        return undefined
    const response: Response = {
        ThisMonth: { Income: Math.round(data[0].total as number) },
        Record: {
            Income: Math.round(maximum.total),
            Year: maximum.year,
            Month: Moment().month(maximum.month - 1).format("MMMM"),
        },
        Average: {
            Income: Math.round(data.map((z) => z.total).reduce((a, b) => Number(a) + Number(b)) / data.length),
        },
        Totalt: {
            Income: sum,
        }
    };
    return response;
}