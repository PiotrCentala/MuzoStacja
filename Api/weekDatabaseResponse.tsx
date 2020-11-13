export type weekDatabaseResponse =
    {
        status?: string;
        message?: string;
        data?: {
            noOf: number,
            startTime: Date,
            bookingPayed: number,
            isPayed: boolean,
            start_date: Date,
            start_hour: number,
        }
    }

type Record =
    {
        noOf: number,
        startTime: Date,
        bookingPayed: number,
        isPayed: boolean,
        start_date: Date,
        start_hour: number,
    }