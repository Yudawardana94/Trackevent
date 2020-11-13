import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Tracked = (props) => {
    const navigation = useNavigation()
    console.log(Object.keys(navigation))
    return (
        <View style={styles.container}>
            <Text>ini halaman tracked</Text>

            <Button title="pindah ke detail" color="slateblue" onPress={() => navigation.navigate('Detail', {data: {
            name: 'Metalica Concert',
            location: 'Palace Ground',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8qKFhmFiLQBrlIdhPHYJ3Jaiby7dD6FbixA&usqp=CAU',
            isFree: false,
            price: '$500'
        }})} />
        </View>
    )
}
const mapStateToProps = (state) => state;
const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(Tracked)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "salmon",
        zIndex: 10
    }
})
