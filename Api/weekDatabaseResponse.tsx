export type weekDatabaseResponse =
    {
        status?: string;
        message?: string;
        data: Record[],
    }

export type Record =
    {
        noOf: number,
        startTime: Date,
        bookingPayed: number,
        isPayed: number,
        start_date: string,
        start_hour: number,
    }