import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Landing = (props) => {
    const [name, setName] = useState('')

    const onSubmitButton = () => {
        props.navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <Text>ini halaman {props.title}</Text>
            <View style={styles.inputWarper}>
                <Text>Your Name Here</Text>
                <TextInput 
                value={name}
                style={styles.input}
                placeholder={"Your Name"}
                />
                <Button title="Submit" color="black" onPress={onSubmitButton}/>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1"
    },
    inputWarper: {  
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    input: {
        width: '95%',
        backgroundColor: 'seagreen',
        marginVertical: 15
    }
})