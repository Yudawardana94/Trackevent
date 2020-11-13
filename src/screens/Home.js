import React, {useState, useEffect} from 'react'
import { Animated ,StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Tracked from './Tracked'

import firestore from '@react-native-firebase/firestore';

const Home = (props) => {
    const [viewType, setViewType] = useState(false)
    const [userData, setUserData] = useState(null)

    const onPressEvent = () => {
        props.navigation.navigate('Detail')
    }

    const fetchData = async () => {
        try {
            const coll = firestore().collection("users")
            console.log(Object.keys(coll),'========== INI COLL ==========')   
            
        } catch (error) {
            console.log(`~~~~~~~~~~~~~~~ ERROR DI FETCH DATA ~~~~~~~~~~~~~~~`, error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const renderRightAction = (progress, dragX) => {
        return <Tracked />
    }

    return (
        <View style={styles.container}>
                <Swipeable
                renderRightActions={() => renderRightAction()}
                >
                    <View style={{height: '100%', backgroundColor: '#f1f1f1'}}>
                    <Text>ini halaman home</Text>
                    <TouchableOpacity onPress={() => setViewType(!viewType)}>
                        <Text>Ganti</Text>
                    </TouchableOpacity>
                    {
                        viewType ? (
                            <TouchableOpacity 
                            onPress={onPressEvent}
                            style={styles.listView}>
                                <Text>ini list</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity 
                            onPress={onPressEvent}
                            style={styles.gridView}>
                                <View style={{width: '100%', backgroundColor: "gray", flex: 1, borderRadius: 3}} />
                                <View style={{marginVertical: 15, marginHorizontal: 10}}>
                                    <Text>ini grid</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    </View>
                </Swipeable>
            </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1"
    },
    listView: {
        backgroundColor: "slateblue",
        marginHorizontal: 10,
        borderRadius: 3,
        padding: 10
    },
    gridView: {
        backgroundColor: "seagreen",
        width: '40%',
        height: 200,
        borderRadius: 3,
        margin: 10,
        // padding: 10,
        justifyContent: "space-between"
    },
    leftAction: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
      },
      actionText: {
        color: 'black',
        fontSize: 16,
      },
      rectButton: {
          width:'100%',
          height: 80,
          backgroundColor: 'blue',
        },
})
