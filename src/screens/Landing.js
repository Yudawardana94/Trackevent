import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Keyboard,
    Platform,
    SafeAreaView
} from 'react-native'

import { enterName, getAllUser } from '../stores/actions'

const Landing = (props) => {
    const [name, setName] = useState('')

    const onSubmitButton = () => {
        if(name !== '') {
            props.enterName(name, props.navigation)
        }
        setName('')
        Keyboard.dismiss()
        // eh hilang maaf ya
        // eh hilang maaf ya
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to {'\n'+props.title}</Text>
            <View style={styles.inputWarper}>
                <Text style={styles.tag}>Enter Your Name Here</Text>
                <TextInput 
                value={name}
                style={[styles.input,{minHeight: 50}]}
                placeholder={"Your Name"}
                onChangeText={(text) => setName(text)}
                />
                {props.isLoading ? (
                    <View style={styles.button}>
                        <ActivityIndicator size="small" color="#00ff00" />
                    </View>
                ) : 
                (
                    <>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={onSubmitButton}>
                        <Text style={styles.buttonText}>Sumbit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Test")}>
                        <Text style={styles.buttonText}>Test</Text>
                    </TouchableOpacity>
                    </>
                )
                }
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    getAllUser,
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