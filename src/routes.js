import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login'
import Salesman_Listing from './pages/Salesman_Listing'
import Detail from './pages/Detail'
import Create_Salesman from './pages/Create_Salesman'
import Update_Salesman from './pages/Update_Salesman'
import Home_Admin from './pages/Home_Admin'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Home_Admin" component={Home_Admin} />
                <AppStack.Screen name="Salesman_Listing" component={Salesman_Listing} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Create_Salesman" component={Create_Salesman} />
                <AppStack.Screen name="Update_Salesman" component={Update_Salesman} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}