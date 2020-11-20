import { weekDatabaseResponse } from '../Api/weekDatabaseResponse'

export type weekData = {
    id: string,
    date: string,
    hour: string,
    startTime: Date,
    noofPass?: number,
    noofPayed?: number,
    notEmpty: boolean,
}

export const CreateWeekData = (input: weekDatabaseResponse) => {


    const out: weekData[] = [];
    input?.data.forEach(element => {
        const i = out.findIndex((a) => a.startTime == element.startTime);
        if (i == -1) {

            if (element.bookingPayed > 0) {
                out.push({
                    noofPass: undefined, noofPayed: Number(element.noOf), startTime: element.startTime, hour: element.start_hour.toString(), date: element.start_date,
                    id: Math.random().toString(), notEmpty: true,
                })
            }
            else if (element.isPayed > 0) {
                out.push({
                    noofPass: Number(element.noOf), noofPayed: undefined, startTime: element.startTime, hour: element.start_hour.toString(), date: element.start_date,
                    id: Math.random().toString(), notEmpty: true
                })
            }
            else {
                out.push({
                    noofPass: undefined, noofPayed: undefined, startTime: element.startTime, hour: element.start_hour.toString(), date: element.start_date,
                    id: Math.random().toString(), notEmpty: false
                })
            }
        }
        else {
            if (element.bookingPayed > 0) {
                out[i].noofPayed = Number(element.noOf);

            }
            else if (element.isPayed > 0) {
                out[i].noofPass = Number(element.noOf);
            }
        }
    });
    return out;
}

export const giveRecordsForDay = (inputrecord: weekData[], today: string) => {
    inputrecord = inputrecord?.filter((a) => { return (a.date === today) })
    return inputrecord;
}