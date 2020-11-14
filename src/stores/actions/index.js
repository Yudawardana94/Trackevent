import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

import {
    SET_NAME,
    SET_EVENTS,
    SET_USER,
    SET_TO_TRACKED, 
    SET_MESSAGE,
    SET_LOADING
} from '../type'

const userColl = firestore().collection("users")
const eventColl = firestore().collection("events")


function errorAction(error, location) {
    console.log(`============== ERROR DI ${location} ==============`, error)
}

export function getAllUser () {
    return async (dispatch) => {
        try {
            const userCollection = await firestore().collection("users").get()
            let cleanData = userCollection.map(el => {
                return el._data
            })

            console.log(cleanData, '=== ini clean data ===')
        } catch (error) {
            errorAction(error, 'GET-ALL-USERS')
        }
    }
}

export function getAllEvents () {
    return async (dispatch) => {
        try {
            const userCollection = await eventColl.get()
            // console.log(Object.keys(userCollection._docs[0]),'ini mau dicari doc keynya')
            // console.log(userCollection._docs[0]._ref._documentPath._parts[1],'ini metadatanya')

            let cleanData = userCollection._docs.map(el => {
                let modifyData = el._data
                modifyData.docId = el._ref._documentPath._parts[1]
                return modifyData
            })

            // console.log(Object.keys(cleanData[0]), '=== ini clean data ===')
            dispatch({
                type: SET_EVENTS,
                payload: cleanData
            })
        } catch (error) {
            errorAction(error, 'GET-ALL-EVENTS')
        }
    }
}

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
        try {
            dispatch({
                type: SET_LOADING,
                payload: true
            })
            const userCollection = await userColl.get()
            let foundUser = userCollection._docs.filter(el => {
                el._data.docId = el._ref._documentPath._parts[1]
                return el._data.name == input
            })
            const createduser = {
                name: input,
                age: 0,
                trackedEvents: []
            }
            if(foundUser.length == 0) {
                await userColl.add(createduser)
            } 
            console.log(foundUser[0])
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            dispatch({
                type: SET_USER,
                payload: foundUser[0] ? foundUser[0]._data : createduser
            })
            dispatch({
                type: SET_MESSAGE,
                payload: foundUser[0] ? `Welcome back ${input} !` : `Welcome ${input} !`
            })
            navigation.navigate('Home')
        } catch (error) {
            errorAction(error, 'ENTER NAME')           
        }
    }
}
export function updateTrackedEvent(updateData, input){
    return async (dispatch) => {
        try {
            // console.log(updateData, input, 'ini di log dulu')
            let isDuplicate = false
            for (let i = 0; i < input.trackedEvents.length; i++) {
                if(input.trackedEvents[i].docId == updateData.docId) {
                    isDuplicate = true
                    break
                }
            }
            if(!isDuplicate) {
                console.log('masoooookkkk')
                input.trackedEvents.push(updateData)
                await userColl.doc(input.docId).update({
                    trackedEvents : input.trackedEvents
                })
            }
        } catch (error) {
            errorAction(error, 'UPDATE TRACKED EVENT')
        }
    }
}
export function deleteTrackedEvent(updateData, userData) {
    return async (dispatch) => {
        try {
            let updateMaterial = userData.trackedEvents.filter((el) => {
                return el.docId !== updateData.docId
            })

            await userColl.doc(userData.docId).update({
                trackedEvents : updateMaterial
            })
        } catch (error) {
            errorAction(error, 'DELETE TRACKED EVENT')
        }
    }
}