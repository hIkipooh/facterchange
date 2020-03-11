import { handleActions } from 'redux-actions';
// import {TYPE} from "./actions";

const initialState = {
    pending: false,
    error: false,
    list: [],
};

export default handleActions({
    'get_games_pending': (state: any) => {
        return {
            ...state,
            pending: true,
        };
    },
    'get_games_success': (state: any, actions: any) => {
        return {
            ...state,
            pending: false,
            list: [...actions.payload],
        };
    },
    'get_games_error': (state: any) => {
        return {
            ...state,
            pending: false,
            error: true,
        }
    },
}, initialState);