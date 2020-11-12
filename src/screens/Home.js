import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {S_Component} from './src/Styles'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>ini halaman home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: S_Component
})
