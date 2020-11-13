import firestore from '@react-native-firebase/firestore';
import axios from 'axios'

function errorAction(error, location) {
    console.log(`============== ERROR DI ${location} ==============`, error)
}

export function getAllUser () {
    return async (dispatch) => {
        try {
            const userCollection = await firestore().collection('users')
            // console.log(Object.keys(userCollection),'ini hasilnya user collection')
            await userCollection.add({
                username: 'hello'
            })
            // console.log(userCollection,'ini hasilnya user collection')
        // const users = await firestore()
        // .collection('users')
        // .get()
        console.log(users, 'ini get usersnya')
        } catch (error) {
            errorAction(error, 'GET-ALL-USERS')
        }
    }
}