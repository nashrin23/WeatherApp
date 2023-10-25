import React from 'react';
import HomeScreen from '../screens/home';
import { DAILY, HOME, SEARCH, TODAY } from '../screens';
import DailyScreen from '../screens/daily';
import TodayScreen from '../screens/today';
import SearchScreen from '../screens/search';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{
            headerShown: false,
            }}
            initialRouteName={HOME}
        >
            <Drawer.Screen name={HOME} component={HomeScreen} />
            <Drawer.Screen name={DAILY} component={DailyScreen} />
            <Drawer.Screen name={TODAY} component={TodayScreen} />
            <Drawer.Screen name={SEARCH} component={SearchScreen} />
        </Drawer.Navigator>
    )
}

export default HomeNavigator;
