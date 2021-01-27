export const GET_DAILY_RECORDS = 'GET_DAILY_RECORDS';
export const GET_DAILY_RECORDS_SUCCESS = 'GET_DAILY_RECORDS_SUCCESS';
export const GET_DAILY_RECORDS_ERROR = 'GET_DAILY_RECORDS_ERROR';

export function getDailyRecords() {
    return {
        type: GET_DAILY_RECORDS
    }
}

export function getDailyRecordsSuccess(records) {
    return {
        type: GET_DAILY_RECORDS_SUCCESS,
        records: records,
    }
}

export function getDailyRecordsError(error) {
    return {
        type: GET_DAILY_RECORDS_ERROR,
        error: error
    }
}