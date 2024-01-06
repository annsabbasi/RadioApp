import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import Splash from '../Screens/Splash';
import Home from '../Screens/Home';
import LiveRadio from '../Screens/LiveRadio';
import UpComing from '../Screens/Upcoming';
import DjProfile from '../Screens/DjProfile';
import Archives from '../Screens/Archives';
import Sponsers from '../Screens/Sponsers';
import ShowsContact from '../Screens/ShowsContact';
import ArcheiveInner from '../Screens/ArcheiveInner';
import Shows from '../Screens/Shows';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();

export default function UserLogins() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
                <Stack.Screen component={Splash} name="Splash" />
                <Stack.Screen component={SignUp} name="SignUp" />
                <Stack.Screen component={SignIn} name="SignIn" />
                <Stack.Screen component={Home} name="Home" />
                <Stack.Screen component={Profile} name='Profile' />
                <Stack.Screen component={LiveRadio} name='LiveRadio' />
                <Stack.Screen component={UpComing} name='UpComing' />
                <Stack.Screen component={DjProfile} name='DjProfile' />
                <Stack.Screen component={Archives} name='Archeives' />
                <Stack.Screen component={ShowsContact} name='ShowsContact' />
                <Stack.Screen component={Sponsers} name='Sponsers' />
                <Stack.Screen component={ArcheiveInner} name='ArcheiveInner' />
                <Stack.Screen component={Shows} name='Shows' />
            </Stack.Navigator>
        </NavigationContainer>
    )
};