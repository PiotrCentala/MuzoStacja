import { weekDatabaseResponse } from '../Api/weekDatabaseResponse'

export type weekData = {
    id: string,
    date: string,
    hour: string,
    startTime: Date,
    noofPass: number,
    noofPayed: number,
}

export const CreateWeekData = (input: weekDatabaseResponse) => {
    const out: weekData[] = [];

    input?.data.forEach(element => {
        const i = out.findIndex((a) => a.startTime == element.startTime);
        if (i == -1) {

            if (element.bookingPayed > 0) {
                out.push({
                    noofPass: 0, noofPayed: Number(element.noOf), startTime: element.startTime, hour: element.start_hour.toString(), date: element.start_date,
                    id: Math.random().toString()
                })
            }
            else {
                out.push({
                    noofPass: Number(element.noOf), noofPayed: 0, startTime: element.startTime, hour: element.start_hour.toString(), date: element.start_date,
                    id: Math.random().toString()
                })
            }
        }
        else {
            if (element.bookingPayed > 0) {
                const a = (out[i].noofPayed + Number(element.noOf))
                console.log(a);
                out[i].noofPayed = a;

            }
            else {
                //out[i].noofPass = (out[i].noofPayed + element.noOf);
            }
        }
    });
    return out;
}

export const giveRecordsForDay = (inputrecord: weekData[], date_Move: number = 0) => {
    var date = new Date().getDate() + date_Move;
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    let today = `${year}.${month}.${date}`
    inputrecord = inputrecord.filter((a) => { return (a.date === today) })
    return inputrecord;
}