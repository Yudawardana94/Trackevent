import {
    SET_NAME
} from '../type'

const initialState = {
    title: 'Trackevent',
    userName: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_NAME: 
            return {
                ...state,
                userName: payload
            }    
        default:
            return state
    }
}