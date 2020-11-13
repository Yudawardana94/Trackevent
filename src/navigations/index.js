import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native'

const Stack = createStackNavigator()
import HomeScreen from '../screens/Home'
import DetailScreen from '../screens/Detail'
import LandingScreen from '../screens/Landing'
import TrackedScreen from '../screens/Tracked'

const navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Tracked" component={TrackedScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default navigation