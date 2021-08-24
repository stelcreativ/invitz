import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

const Tab = createMaterialBottomTabNavigator()

const TabsNav = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#777777',
                    borderRadius: 15,
                    height: 90,
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabsNav