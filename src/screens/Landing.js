import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {S_Component} from './src/Styles'

const Landing = () => {
    return (
        <View style={styles.container}>
            <Text>ini halaman Landing</Text>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container: S_Component
})