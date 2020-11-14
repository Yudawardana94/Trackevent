import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { 
    Animated,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
    SafeAreaView,
    Platform,
    Button
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Modal from 'react-native-modal';

import Tracked from './Tracked'
import {
    getAllEvents,
    updateSetting,
    sortingData
} from '../stores/actions'

const Home = (props) => {
    const [viewType, setViewType] = useState(true) //if true show listview, else gridview
    const [sortType, setSortType] = useState('price')
    const [columns, setColumns] = useState(1)
    const [modalVisible, setModalVisible] = useState(false)
    const [eventData, setEventData] = useState([
        {
            name: 'Metalica Concert',
            location: 'Palace Ground',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8qKFhmFiLQBrlIdhPHYJ3Jaiby7dD6FbixA&usqp=CAU',
            isFree: false,
            price: '$500'
        },
        {
            name: 'Saree Exhibition',
            location: 'Malleswaram Ground',
            picture: 'https://i.pinimg.com/564x/91/fe/5f/91fe5f39f019e4eaab4afd6090e937a4.jpg',
            isFree: true,
            price: '$0'
        },
        {
            name: 'Wine tasting event',
            location: 'Links Brewery',
            picture: 'https://i.pinimg.com/564x/20/2f/78/202f78bfe69bc3cb5b3124633dd47cc7.jpg',
            isFree: false,
            price: '$500'
        },
        {
            name: 'Startups Meet',
            location: 'Kanteerava Indoor Stadium',
            picture: 'https://i.pinimg.com/236x/1d/9b/a0/1d9ba0f40beebd8d3be346006848ef3c.jpg',
            isFree: false,
            price: '$500'
        },
        {
            name: 'Summer Noon Party',
            location: 'Kumara Park',
            picture: 'https://i.pinimg.com/236x/13/72/b5/1372b5aba7512f50eef0c78db2a1354b.jpg',
            isFree: false,
            price: '$500'
        },
        {
            name: 'Rock and Rolls Nights',
            location: 'Sarjapur Road',
            picture: 'https://i.pinimg.com/236x/13/72/b5/1372b5aba7512f50eef0c78db2a1354b.jpg',
            isFree: false,
            price: '$500'
        },
        {
            name: 'barbecue Fridays',
            location: 'Whitefield',
            picture: 'https://i.pinimg.com/236x/13/72/b5/1372b5aba7512f50eef0c78db2a1354b.jpg',
            isFree: false,
            price: '$500'
        },
        {
            name: 'Summer Workshop',
            location: 'Indiranagar',
            picture: 'https://i.pinimg.com/236x/13/72/b5/1372b5aba7512f50eef0c78db2a1354b.jpg',
            isFree: true,
            price: '$0'
        },
        {
            name: 'Impressions & Expressions',
            location: 'MG Road',
            picture: 'https://i.pinimg.com/236x/13/72/b5/1372b5aba7512f50eef0c78db2a1354b.jpg',
            isFree: true,
            price: '$0'
        },
        {
            name: 'Italian Carnival',
            location: 'Electronic City',
            picture: 'https://i.pinimg.com/236x/13/72/b5/1372b5aba7512f50eef0c78db2a1354b.jpg',
            isFree: true,
            price: '$0'
        },
    ])
    const sortOption = ['default', 'price', 'name', 'location']

    const onPressEvent = (data) => {
        props.navigation.navigate('Detail', {data})
    }
    useEffect(() => {
        props.getAllEvents(props.userData)
    }, [])
    
    useEffect(() => {
        if (Platform.OS == 'android') {
            props.message ? ToastAndroid.show(props.message, ToastAndroid.SHORT) : null
        }
    }, [props.message])
    
    useEffect(() => {
        console.log(props.userData.setting,'ini userdata di home')
        if(props.userData) {
            props.userData.setting.view ? setColumns(1) : setColumns(2)
            setViewType(props.userData.setting.view)
            setSortType(props.userData.setting.sort)
        }
    }, [props.userData])

    const changeViewType = () => {
        viewType ? setColumns(2) : setColumns(1)
        setViewType(!viewType)
        props.updateSetting('view', !viewType, props.userData)
    }

    const changeSortType = (value) => {
        setModalVisible(false)
        setSortType(value)
        props.sortingData(value, props.userData)
    }

    return (
        <View 
        style={styles.container}>
            <Swipeable
            renderRightActions={() => <Tracked />}
            >
                <View style={{height: '100%', backgroundColor: '#4B616E', paddingBottom: Platform.OS === 'ios' ? 20: 0}}>
                    <SafeAreaView>
                        <Text style={styles.title}>All Event</Text>
                    </SafeAreaView>
                    <View style={{flexDirection: "row-reverse", justifyContent: "flex-start"}}>
                        <TouchableOpacity onPress={changeViewType} style={styles.settingType}>
                            <Text style={{color: "white", height: 20}}>View :</Text>
                            <Text style={{color: "white", marginVertical: 5}}>{viewType ? 'List View' : 'Grid View'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => setModalVisible(true)}
                        style={styles.settingType}>
                            <Text style={{color: "white", height: 20}}>Sort :</Text>
                            <Text style={{color: "white", marginVertical: 5, textTransform: "capitalize"}}>{sortType}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text>{JSON.stringify(props.allEvents)}</Text> */}
                    {/* <Text>{JSON.stringify(props.userData)}</Text> */}
                    {
                        viewType ? (
                            <FlatList 
                            data={props.allEvents}
                            renderItem={({item}) => {
                                return <TouchableOpacity 
                                onPress={() => onPressEvent(item)}
                                style={styles.listView}>
                                    <Image
                                        style={{width: '100%', height: 120, backgroundColor: 'seagreen'}}
                                        source={{uri: item.picture}}
                                        resizeMethod={"resize"}
                                        resizeMode={"cover"}
                                    />
                                    <View style={{marginVertical: 15, marginHorizontal: 10, minHeight: 50, justifyContent: "center", flexDirection: "row", justifyContent: "space-between"}}>
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.location}>{item.location}</Text>
                                        </View>
                                        <Text style={styles.price}>{item.isFree ? "Free" : "Paid"}</Text>
                                    </View>
                                </TouchableOpacity>
                            }}
                            keyExtractor={(item) => item.name+'gridList'}
                            numColumns={columns}
                            horizontal={false}
                            key={columns}
                            />
                        ) : (
                                <View style={{flex: 1, paddingBottom: 10}}>
                                    <FlatList 
                                    data={props.allEvents}
                                    renderItem={({item}) => {
                                        return <TouchableOpacity 
                                        onPress={() => onPressEvent(item)}
                                        style={styles.gridView}>
                                            <View style={{backgroundColor: 'slateblue'}}>
                                                <Image
                                                    style={{width: '100%', backgroundColor: "gray", minHeight: 150, borderRadius: 3}}
                                                    source={{uri: item.picture}}
                                                    resizeMethod={"resize"}
                                                    resizeMode={"cover"}
                                                />
                                                <View style={{zIndex: 10, alignItems: "center", justifyContent: "center", position: "absolute", minHeight: 25, backgroundColor: "#E28413",elevation: 5, paddingHorizontal: 10, margin: 5, right: 2, borderRadius: 4}}>
                                                    <Text style={{color: "white"}}>{item.isFree ? "Free" : "Paid"}</Text>
                                                </View>
                                                {/* <View style={{width: '100%', backgroundColor: "gray", minHeight: 150, borderRadius: 3}} /> */}
                                            </View>
                                            <View style={{marginVertical: 15, marginHorizontal: 10, maxHeight: 50, justifyContent: "flex-start", alignItems: "flex-start", flexShrink: 1 }}>
                                                <Text style={[styles.name,{fontSize: 16}]}>{item.name.length > 20 ? item.name.substring(0,18) + '...' : item.name}</Text>
                                                <Text style={styles.location}>{item.location}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    }}
                                    keyExtractor={(item) => item.name+'gridHome'}
                                    numColumns={columns}
                                    horizontal={false}
                                    key={columns}
                                    // columnWrapperStyle={{justifyContent: "space-between", flexWrap: "wrap", marginHorizontal: 5}}
                                    />
                                </View>
                        )
                    }
                </View>
            </Swipeable>
        </View>
    )
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    getAllEvents,
    updateSetting,
    sortingData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    listView: {
        backgroundColor: "#57A1C9",
        marginHorizontal: 10,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#34A4E0',
        marginVertical: 5,
        elevation: 1
    },
    gridView: {
        backgroundColor: "#57A1C9",
        borderWidth: 2,
        borderColor: '#34A4E0',
        width: '45%',
        minHeight: 220,
        borderRadius: 3,
        margin: 10,
        elevation: 2
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
    name: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        fontStyle: "italic"
    },
    location: {
        color: "white",
    },
    price: {
        color: "white",
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        maxHeight: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E28413"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 1.5,
        margin: 10,
        color: "white"
    },
    settingType: {
        alignSelf: "flex-end",
        marginVertical: 15,
        marginRight: 15,
        backgroundColor: "#57A1C9",
        paddingHorizontal: 10,
        borderRadius: 2,
        paddingVertical: 5,
        elevation: 3,
        alignItems: "flex-start",
        justifyContent: "space-between",
        minHeight: 50,
    },
    modalStyle: {
        borderRadius: 5,
        padding: 15,
        backgroundColor: "white"
    },
    sortOption: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: Platform.OS === "ios" ? "center" : "flex-start"
    }
})
