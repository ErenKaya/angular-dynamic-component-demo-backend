import {
    constants
} from '../Constants';

export const httpPostRequest = ({ url, data } = {}) => ({
    type: constants.POST,
    url,
    data
})

export const httpGetRequest = ({ url, data } = {}) => ({
    type: constants.GET,
    url,
    data
})
