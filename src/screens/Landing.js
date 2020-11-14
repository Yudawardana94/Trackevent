import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'

import { enterName } from '../stores/actions'

const Landing = (props) => {
    const [name, setName] = useState('Fash')

    const onSubmitButton = () => {
        // console.log(name)
        props.enterName(name, props.navigation)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to {'\n'+props.title}</Text>
            <View style={styles.inputWarper}>
                <Text style={styles.tag}>Enter Your Name Here</Text>
                <TextInput 
                value={name}
                style={styles.input}
                placeholder={"Your Name"}
                onChangeText={(text) => setName(text)}
                />
                <TouchableOpacity 
                style={styles.button}
                onPress={onSubmitButton}>
                    <Text style={styles.buttonText}>Sumbit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    enterName
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4B616E"
    },
    inputWarper: {  
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginVertical: 30,
        flex: 1
    },
    input: {
        width: '95%',
        backgroundColor: '#DFE3E6',
        marginVertical: 15,
        borderRadius: 4,
        paddingHorizontal: 15,
        color: "#092D2E",
        borderWidth: 1.6,
        borderColor: "#010302"
    },
    button: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#08FC72",
        width: 150,
        backgroundColor: "#398259",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1.5
    },
    title: {
        fontSize: 24,
        margin: 20,
        fontWeight: "bold",
        letterSpacing: 1.5,
        color: "white"
    },
    tag: {
        color: "white"
    }
})