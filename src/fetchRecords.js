import axios from 'axios';

import {getDailyRecords, 
    getDailyRecordsSuccess,
    getDailyRecordsError} from './actions'
    
    function fetchRecords() {
        return dispatch => {
            dispatch(getDailyRecords());
            axios.get(`https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=323266205_alertes-pollens-nantes&q=&facet=nom&facet=type&facet=sous_type&format=json`)
            // .then(res => res.json())    
            .then(res => {
                console.log("RES : ", res);
                if(res.error) {
                    throw(res.error);
                }
                dispatch(getDailyRecordsSuccess(res.records));
                return res.value;
            })
            .catch(error => {
                console.log("ERROR: ", error)
                dispatch(getDailyRecordsError(error));
            })
        }
    }
    
    export default fetchRecords;