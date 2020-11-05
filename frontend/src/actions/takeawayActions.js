import Axios from 'axios';
import axios from 'axios';

import { GET_TAKEAWAY_DATA, DELETE_TAKEAWAY_DATA, TAKEAWAY_DATA_RETURNED, TAKEAWAY_DATA_ERROR } from '../constants/takeawayConstants';

const getTakeawayData = ( ) => async ( dispatch ) => {
    try {
        dispatch({ type: GET_TAKEAWAY_DATA });
        const { data } = await axios.get('/api/takeaway/');
        dispatch({ type: TAKEAWAY_DATA_RETURNED, payload: data });
    } catch (error) {
        dispatch( { type: TAKEAWAY_DATA_ERROR, payload: error.message });
    }
};


export { 
    getTakeawayData
};