import {
    SET_NAME,
    SET_EVENTS,
    SET_USER,
    SET_TO_TRACKED,
    SET_MESSAGE,
    SET_LOADING
} from '../type'

const initialState = {
    title: 'Trackevent',
    userName: null,
    allEvents: null,
    userData: null,
    myTrackedEvent: null,
    message: null,
    isLoading: false
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_NAME: 
            return {
                ...state,
                userName: payload
            }   
            
        case SET_EVENTS:
            return {
                ...state,
                allEvents: payload
            }

        case SET_USER: 
            return {
                ...state,
                userData: payload
            }
        
        case SET_TO_TRACKED:
            return {
                ...state,
                myTrackedEvent: payload
            }

        case SET_MESSAGE: 
            return {
                ...state,
                message: payload
            }
        
        case SET_LOADING: 
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state
    }
}