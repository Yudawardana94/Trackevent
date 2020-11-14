import AsyncStorage from '@react-native-community/async-storage';

import {
    SET_NAME
} from '../type'

function errorAsyncStorage(error) {
    console.log('========== EROR ON ASYNC STORAGE ERROR ==========',error)
}

function setData(inputData, key) {
    try {
        
    } catch (error) {
        errorAsyncStorage(error)
    }
}

function updateData(inputData, flag, key) {
    try {
        
    } catch (error) {
        errorAsyncStorage(error)
    }
}

function deleteData(flag, key) {
    try {
        
    } catch (error) {
        errorAsyncStorage(error)
    }
}

function getData(key) {
    try {
        
    } catch (error) {
        errorAsyncStorage(error)
    }
}

export function enterName(input, navigation) {
    return async (dispatch) => {
        dispatch({
            type: SET_NAME,
            payload: input
        })
        navigation.navigate('Home')
    }
}