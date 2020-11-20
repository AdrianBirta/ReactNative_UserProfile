import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator  } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import InfoUser from '../screens/InfoUser';
import ToDoList from '../screens/ToDoList';

import Colors from '../constants/Colors';

const InfoUserNavigator = createStackNavigator({
    InfoUser:{
        screen: InfoUser
    }
});

const ToDoListNavigator = createStackNavigator({
    ToDoList: {
        screen: ToDoList
    }
})

InfoUser.navigationOptions = (navData) => {
    return {
        headerTitle: 'User Informations',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : '',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='Menu'
                        iconName='ios-menu'
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }}/>
                </HeaderButtons>
            )
        }
    }
}

ToDoList.navigationOptions = (navData) => {
    return {
        headerTitle: 'To Do List',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : '',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='Menu'
                        iconName='ios-menu'
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }}/>
                </HeaderButtons>
            )
        }
    }
}


const MainNavigator = createDrawerNavigator({
    InfoUser: InfoUserNavigator,
    ToDoList: ToDoListNavigator
})

export default createAppContainer(MainNavigator);