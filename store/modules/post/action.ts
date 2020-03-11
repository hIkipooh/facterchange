import {Dispatch} from "redux";
import {AxiosService} from "../../../common/service/axios.service";

export enum TYPE {
    GET_GAMES_PENDING = 'get_games_pending',
    GET_GAMES_SUCCESS = 'get_games_success',
    GET_GAMES_ERROR = 'get_games_error',
}

export default {
    getMyGames: () => (dispatch: Dispatch) => {
        dispatch({type: 'get_games_pending'});
        return AxiosService.Instance.get(
            '/app/v2/app/get-my-dadex-apps',
        ).then((data: any) => {
            setTimeout(() => {
                dispatch({type: 'get_games_success', payload: data.list});
            }, 2000);
        }).catch(() => {
            dispatch({type: 'get_games_error'});
        });
    },
}

