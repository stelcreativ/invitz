import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{

            "tabBarActiveTintColor": '#009799',
            "tabBarStyle": [
                {
                    "display": "flex"

                },
                null
            ]
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
        />

        <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
            }}
        />

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
);


export default MainTabScreen;
