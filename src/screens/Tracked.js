import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {S_Component} from './src/Styles'

const Tracked = () => {
    return (
        <View style={styles.container}>
            <Text>ini halaman tracked</Text>
        </View>
    )
}

export default Tracked

const styles = StyleSheet.create({
    container: S_Component
})
