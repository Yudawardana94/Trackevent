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

export function getAllEvents (userData) {
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_LOADING,
                payload: true
            })
            let eventCollection
            if(userData.setting.sort == 'default') {
                eventCollection = await eventColl.get()
            } else {
                eventCollection = await eventColl
                .orderBy(userData.setting.sort, 'asc')
                .get()
            }
            // console.log(Object.keys(eventCollection._docs[0]),'ini mau dicari doc keynya')
            // console.log(eventCollection._docs[0]._ref._documentPath._parts[1],'ini metadatanya')

            let cleanData = eventCollection._docs.map(el => {
                let modifyData = el._data
                modifyData.docId = el._ref._documentPath._parts[1]
                return modifyData
            })

            // console.log(Object.keys(cleanData[0]), '=== ini clean data ===')
            dispatch({
                type: SET_LOADING,
                payload: false
            })
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
                trackedEvents: [],
                setting: {
                    view: true,
                    sort: 'default'
                }
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
export function updateTrackedEvent(updateData, userData){
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_LOADING,
                payload: true
            })
            let isDuplicate = false
            for (let i = 0; i < userData.trackedEvents.length; i++) {
                if(userData.trackedEvents[i].docId == updateData.docId) {
                    isDuplicate = true
                    break
                }
            }
            let actionhere
            if(!isDuplicate) {
                console.log('masoooookkkk')
                userData.trackedEvents.push(updateData)
                await userColl.doc(userData.docId).update({
                    trackedEvents : userData.trackedEvents
                })
                actionhere = 'Success add event to tracked list.'
            } else {
                actionhere = `Already add this event to tracked list.`
            }

            dispatch({
                type: SET_LOADING,
                payload: false
            })
            dispatch({
                type: SET_USER,
                payload: userData
            })
            dispatch({
                type: SET_MESSAGE,
                payload: actionhere
            })
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
            userData.trackedEvents = updateMaterial
            dispatch({
                type: SET_USER,
                payload: userData
            })
            dispatch({
                type: SET_MESSAGE,
                payload: 'Success remove event.'
            })
        } catch (error) {
            errorAction(error, 'DELETE TRACKED EVENT')
        }
    }
}

export function updateSetting(field, value, userData) {
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_LOADING,
                payload: true
            })
            userData.setting[field] = value
            await userColl.doc(userData.docId).update({
                setting: userData.setting
            })
            console.log('berhasil update setting user tersebut')
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            dispatch({
                type: SET_USER,
                payload: userData
            })
        } catch (error) {
            errorAction(error, 'UPDATE SETTING')
        }
    }
}
export function sortingData(input, userData) {
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_LOADING,
                payload: true
            })
            let sortedEvent
            if(input == 'default') {
                sortedEvent = await eventColl.get()    
            } else {
                sortedEvent = await eventColl
                .orderBy(input, 'asc')
                .get()
            }

            userData.setting.sort = input
            await userColl.doc(userData.docId).update({
                setting: userData.setting
            })
            console.log(sortedEvent._docs, 'ini user collection dari sort')
            let cleanData = sortedEvent._docs.map(el => {
                console.log(el._data.name, JSON.stringify(el._data.isFree), el._data.price, el._data.location)
                return el._data
            })

            // console.log(Object.keys(cleanData[0]), '=== ini clean data ===')
            console.log(cleanData,'ini celandatanya')
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            dispatch({
                type: SET_MESSAGE,
                payload: input == 'default' ? 'Default order.' : `Success sort event by ${input}.`
            })
            dispatch({
                type: SET_EVENTS,
                payload: cleanData
            })
        } catch (error) {
            errorAction(error, 'GET-ALL-EVENTS')
        }
    }
}
export function filterData(input, value, userData) {
    return async (dispatch) => {
        try {
            console.log(input,'ini inputnya')
            const userCollection = await eventColl
            // .where('isFree', '==', true)
            .orderBy('isFree', 'desc')
            .get()

            // console.log(Object.keys(userCollection._docs), 'ini user collection dari sort')
            console.log(userCollection._docs, 'ini user collection dari sort')
            let cleanData = userCollection._docs.map(el => {
                console.log(el._data.name, JSON.stringify(el._data.isFree))
                return el
            })

            // // console.log(Object.keys(cleanData[0]), '=== ini clean data ===')
            // dispatch({
            //     type: SET_EVENTS,
            //     payload: cleanData
            // })
        } catch (error) {
            errorAction(error, 'GET-ALL-EVENTS')
        }
    }   
}