import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tracked = () => {
    return (
        <View style={styles.container}>
            <Text>ini halaman tracked</Text>
        </View>
    )
}

export default Tracked

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "salmon",
        zIndex: 10
    }
})
