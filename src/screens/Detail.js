import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {S_Component} from './src/Styles'

const Detail = () => {
    return (
        <View style={styles.container}>
            <Text>ini halaman detail</Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: S_Component
})
