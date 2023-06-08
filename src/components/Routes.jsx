import React from "react";
import { Login } from "../view/Login";
import { Home } from "../view/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Register } from "../view/Register";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const HomeTabs =() => {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor={"#fff"}
        barStyle={{backgroundColor: "#494848"}}>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarLabel: 'Inicio', 
                tabBarIcon: ({color}) => <Icon name="home" color={color} size={26}/>
                }}
            /> 

            <Tab.Screen 
            name="Buscar" 
            component={Home} 
            options={{
                tabBarLabel: 'Buscar', 
                tabBarIcon: ({color}) => <Icon name="magnify" color={color} size={26}/>
                }}
            />
        </Tab.Navigator>
    )
}
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeTabs}/>
                <Stack.Screen options={{headerShown: false}} name="Favoritos" component={HomeTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
 };

 export default Routes;
