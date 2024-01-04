import React from 'react'
import LiveRadio from '../Screens/LiveRadio';
import UpComing from '../Screens/Upcoming';
import DjProfile from '../Screens/DjProfile';
import Archives from '../Screens/Archives';
import Sponsers from '../Screens/Sponsers';
import ShowsContact from '../Screens/ShowsContact';
import ArcheiveInner from '../Screens/ArcheiveInner';
// import Profile from './Screens/Profile';
// import Shows from './Screens/Shows';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

export default function HomeNavigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Stack.Screen component={Home} name='Home' />
                <Stack.Screen component={LiveRadio} name='LiveRadio' />
                <Stack.Screen component={UpComing} name='UpComing' />
                <Stack.Screen component={DjProfile} name='DjProfile' />
                <Stack.Screen component={Archives} name='Archeives' />
                <Stack.Screen component={Sponsers} name='Sponsers' />
                {/* <Stack.Screen component={Shows} name='Shows' /> */}
                <Stack.Screen component={ShowsContact} name='ShowsContact' />
                <Stack.Screen component={ArcheiveInner} name='ArcheiveInner' />
            </Stack.Navigator>
        </NavigationContainer>
    )
}