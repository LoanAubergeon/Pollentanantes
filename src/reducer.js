import {GET_DAILY_RECORDS,
    GET_DAILY_RECORDS_SUCCESS,
    GET_DAILY_RECORDS_ERROR} from './actions'

export const initialState = {
    pending: false,
    records: "",
    error: null
}

export function recordsReducers(state = initialState, action) {
    switch(action.type) {
        case GET_DAILY_RECORDS: 
            return {
                ...state,
                pending: true
            }
        case GET_DAILY_RECORDS_SUCCESS:
            return {
                ...state,
                pending: false,
                quote: action.quote,
            }
        case GET_DAILY_RECORDS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getRecords = state => state.records;
export const getPending = state => state.pending;
export const getError = state => state.error;