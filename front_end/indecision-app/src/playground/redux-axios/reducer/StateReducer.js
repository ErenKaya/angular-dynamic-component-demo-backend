
const defaultState = {};

export const stateReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 1:
            return {
                ...state,
                response: action.response
            }
        default:
        return state;
    }
    

}

