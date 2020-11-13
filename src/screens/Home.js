import React, {useState, useEffect} from 'react'
import { Animated ,StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Tracked from './Tracked'

const Home = (props) => {
    const [viewType, setViewType] = useState(true)
    const [columns, setColumns] = useState(1)
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

    const onPressEvent = (data) => {
        props.navigation.navigate('Detail', {data})
    }

    const renderRightAction = (progress, dragX) => {
        return <Tracked />
    }

    const changeViewType = () => {
        viewType ? setColumns(2) : setColumns(1)
        setViewType(!viewType)
    }
    return (
        <View style={styles.container}>
            <Swipeable
            style
            renderRightActions={() => <Tracked />}
            >
                <View style={{height: '100%', backgroundColor: '#f1f1f1'}}>
                <Text>ini halaman home</Text>
                <TouchableOpacity onPress={changeViewType}>
                    <Text>Ganti</Text>
                </TouchableOpacity>
                {
                    viewType ? (
                        <FlatList 
                        data={eventData}
                        renderItem={({item}) => {
                            return <TouchableOpacity 
                            onPress={() => onPressEvent(item)}
                            style={styles.listView}>
                                <Image
                                    style={{width: '100%', height: 120, backgroundColor: 'seagreen'}}
                                    source={{uri: item.picture}}
                                    resizeMethod={"resize"}
                                    resizeMode={"stretch"}
                                />
                                <View style={{marginVertical: 15, marginHorizontal: 10, minHeight: 50, justifyContent: "center"}}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.location}</Text>
                                    <Text>{item.isFree ? "Free" : "Paid"}</Text>
                                </View>
                            </TouchableOpacity>
                        }}
                        keyExtractor={(item) => item.name+'gridList'}
                        numColumns={columns}
                        horizontal={false}
                        key={columns}
                        />
                    ) : (
                            <FlatList 
                        data={eventData}
                        renderItem={({item}) => {
                            return <TouchableOpacity 
                            onPress={() => onPressEvent(item)}
                            style={styles.gridView}>
                                <View style={{backgroundColor: 'slateblue'}}>
                                    <Image
                                        style={{width: '100%', backgroundColor: "gray", minHeight: 150, borderRadius: 3}}
                                        source={{uri: item.picture}}
                                        resizeMethod={"resize"}
                                        resizeMode={"stretch"}
                                    />
                                    <View style={{zIndex: 10, alignItems: "center", justifyContent: "center", position: "absolute", minHeight: 25, backgroundColor: "yellow", paddingHorizontal: 10, margin: 5, right: 2, borderRadius: 4}}>
                                        <Text>{item.isFree ? "Free" : "Paid"}</Text>
                                    </View>
                                    {/* <View style={{width: '100%', backgroundColor: "gray", minHeight: 150, borderRadius: 3}} /> */}
                                </View>
                                <View style={{marginVertical: 15, marginHorizontal: 10, minHeight: 50, justifyContent: "center"}}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.location}</Text>
                                </View>
                            </TouchableOpacity>
                        }}
                        keyExtractor={(item) => item.name+'gridHome'}
                        numColumns={columns}
                        horizontal={false}
                        key={columns}
                        columnWrapperStyle={{justifyContent: "space-evenly", flexWrap: "wrap"}}
                        />
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
        // padding: 10,
        marginVertical: 5
    },
    gridView: {
        backgroundColor: "seagreen",
        width: '45%',
        minHeight: 200,
        borderRadius: 3,
        margin: 10,
        justifyContent: "space-between",
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
