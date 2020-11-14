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
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text style={{color: "white"}}>Back</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={{width: '100%', height: 350, backgroundColor: 'white', marginBottom: 10}}
                source={{uri: data.picture}}
                resizeMethod={"resize"}
                resizeMode={"cover"}
            />
            <View style={styles.bodyWarper}>
                <Text style={[styles.bodyText, {fontStyle: 'italic', letterSpacing: 1.3,fontSize: 30, fontWeight: "bold"}]}>{data.name}</Text>
                <View style={{}}>
                    <Text style={{color: "white"}}>Location: </Text>
                <Text style={{color: "white", fontStyle: "italic", fontWeight: "600", fontSize: 14}}>{data.location}</Text>
                </View>
                <View style={{flexDirection: "row", alignSelf: 'flex-end', marginHorizontal: 20, alignItems: "flex-end"}}>
                    <Text style={styles.bodyText}>Entrance Fee: </Text>
                    <Text style={[styles.bodyText, {fontSize: 25, paddingLeft: 10, fontWeight: "bold"}]}>{data.isFree ? "Free" : data.price}</Text>
                </View>
            </View>
            <TouchableOpacity 
            style={styles.trackButton}
            onPress={trackEvent}>
                <Text style={styles.trackButtonText}>Track this event</Text>
            </TouchableOpacity>
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
        backgroundColor: "#354E5C",
        padding: 10,
        marginVertical: 15,
        elevation: 3
    },
    bodyText : {
        marginVertical: 5,
        color: "white"
    },
    backButton: {
        position: "absolute",
        left: 15,
        top: 15,
        zIndex: 10,
        backgroundColor: '#E28413',
        borderRadius: 4,
        elevation: 10,
        padding: 10,
        paddingHorizontal: 20
    },
    trackButton: {
        position: "absolute",
        bottom: 35,
        width: '95%',
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#57A1C9",
        borderWidth: 2,
        borderColor: "#34A4E0",
        borderRadius: 5,
        elevation: 3
    },
    trackButtonText: {
        color: "white",
        letterSpacing: 1.5,
        fontWeight: "bold",
        fontSize: 16
    }
})
