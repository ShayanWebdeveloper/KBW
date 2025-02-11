import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import DetailsScreen from './components/detail';
import AboutScreen from './components/About'
import ProfileScreen from './components/profile';
import HomeScreen from './components/Home';

const HomeStack = createStackNavigator();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Tabs" component={BottomTabNavigator} options={{ title: 'About' }} />
      <HomeStack.Screen name="About" component={AboutScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Detail" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Detail" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} options={{ title: 'About' }} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Detail" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

