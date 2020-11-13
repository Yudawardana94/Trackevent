import {
    SET_NAME
} from '../type'


export function enterName(input, navigation) {
    return async (dispatch) => {
        dispatch({
            type: SET_NAME,
            payload: input
        })
        navigation.navigate('Home')
    }
}