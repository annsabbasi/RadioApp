import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import Splash from '../Screens/Splash';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

export default function UserLogins() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
                <Stack.Screen component={Splash} name="Splash" />
                <Stack.Screen component={SignUp} name="SignUp" />
                <Stack.Screen component={SignIn} name="SignIn" />
                <Stack.Screen component={Home} name="Home" />
            </Stack.Navigator>
        </NavigationContainer>
    )
};