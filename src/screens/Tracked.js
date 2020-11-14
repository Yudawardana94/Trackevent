import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList, Image, SafeAreaView } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {
    deleteTrackedEvent
} from '../stores/actions'

const Tracked = (props) => {
    const navigation = useNavigation()

    const onPressAction = (data) => {
        console.log('pindah')
        navigation.navigate('Detail', {data})
    }

    const deleteAction = (item) => {
        props.deleteTrackedEvent(item, props.userData)
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.header}>
                    <Text>Hi {props.userData.name},</Text>
                    <Text>This is your tracked event list. </Text>
                </View>
            </SafeAreaView>
            <FlatList 
                data={props.userData.trackedEvents}
                renderItem={({item}) => {
                    return <TouchableOpacity style={styles.trackedList} onPress={() => onPressAction(item)}>
                        <Image
                            style={{width: 100, backgroundColor: "gray", minHeight: 100, borderRadius: 3, borderWidth: 2.5, borderColor: '#F1F1F1'}}
                            source={{uri: item.picture}}
                            resizeMethod={"resize"}
                            resizeMode={"cover"}
                        />
                        <View style={styles.detailWraper}>
                            <Text style={styles.titleText}>{item.name}</Text>
                            <Text>{item.location}</Text>
                            <Text>{item.isFree ? 'Free Event' : item.price}</Text>
                        </View>
                        <TouchableOpacity 
                        onPress={() => deleteAction(item)}
                        style={styles.hapusButton}>
                            <Text>Hapus</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>
                }}
                keyExtractor={(item) => item.name+'tracked'}
                ListEmptyComponent={() => {
                    return(
                        <View style={{flex: 1, height: 100, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{textAlign: "center", fontSize: 20, fontWeight: "700"}}>You`ve not tracked{'\n'}any event yet.</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    deleteTrackedEvent
}


export default connect(mapStateToProps, mapDispatchToProps)(Tracked)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10
    },
    trackedList: {
        backgroundColor: "slateblue",
        marginVertical: 5,
        padding: 10,
        flexDirection: "row"
    },
    detailWraper: {
        marginHorizontal: 10,
        // alignItems: "center",
        justifyContent: "center"
    },
    header: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: "skyblue"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    hapusButton: {
        alignItems: "flex-end",
        justifyContent: "center",
        flex: 1,
        padding: 10
    }
})
