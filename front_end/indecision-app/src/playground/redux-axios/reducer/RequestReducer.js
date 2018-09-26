import {
    constants
} from '../Constants';
import axios from 'axios';
import {
    updateState
} from '../actions/StateOperation';

const requestReducerDefaultState = {};
export const requestReducer = (state = requestReducerDefaultState, action) => {
    console.log(action);
    switch (action.type) {
        case constants.POST:
            return {
                response: dispatchRequest(action.url, action.data, constants.POST)}
                ;
        case constants.GET:
            return {
                ...state,
                response: relyOnRequest(action.url, action.data, constants.GET)
            };
        default:
            return state;
    }
}


export const relyOnRequest = (url, data, requestType) => {
    return axios({
        method: requestType,
        url: url,
        data: data
    }).then((res) => {
        return res;
    }).catch((res) => {
        return res;
    });

}

export const dispatchRequest = (url, data, requestType)=>{
    return (dispatch)=>{
        axios({
            method: requestType,
            url: url,
            data: data
        }).then((res) => {
            return dispatch(updateState({
                res
            }));
        }).catch((res) => {
            return dispatch(updateState({
                res
            }));
        });
    }
}