import firestore from '@react-native-firebase/firestore';

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
            const userCollection = await firestore().collection("events").get()
            let cleanData = userCollection.map(el => {
                return el._data
            })

            console.log(cleanData, '=== ini clean data ===')
        } catch (error) {
            errorAction(error, 'GET-ALL-USERS')
        }
    }
}