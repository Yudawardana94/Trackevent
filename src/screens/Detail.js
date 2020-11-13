import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'

const Detail = (props) => {
    const data = props.route.params.data
    // console.log(Object.keys(props.route.params.data))

    const trackEvent = () => {
        console.log('track this Event')
    }

    return (
        <View style={styles.container}>
            <View style={{color: "yellow", position: "absolute",left: 20, top: 20, zIndex: 10, backgroundColor: 'crimson', padding: 10, paddingHorizontal: 20}}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={{width: '100%', height: 250, backgroundColor: 'seagreen'}}
                source={{uri: data.picture}}
                resizeMethod={"resize"}
                resizeMode={"stretch"}
            />
            <View style={styles.bodyWarper}>
                <Text style={[styles.bodyText, {fontSize: 25, fontWeight: "bold"}]}>{data.name}</Text>
                <Text style={styles.bodyText}>{data.location}</Text>
                <Text style={styles.bodyText}>{data.isFree ? "Free" : data.price}</Text>
            </View>
            <Button title="track this event" color="slateblue" onPress={trackEvent}/>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1"
    },
    bodyWarper: {
        backgroundColor: "teal",
        padding: 10
    },
    bodyText : {
        marginVertical: 5
    }
})
