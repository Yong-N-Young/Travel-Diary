import React from 'react';

import { createStackNavigator} from 'react-navigation-stack'; //stack
import { createBottomTabNavigator} from 'react-navigation-tabs'; //아래 탭
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'; //안드로이드만 쓰는거(탭)
import { createAppContainer } from 'react-navigation'; //이거 이케 해줘야되네 따로
import { createDrawerNavigator} from 'react-navigation-drawer' //메뉴바

import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

//메인 스크린(Card)
import MainScreen from '../screens/CardTab/MainScreen';
import ListScreen from '../screens/CardTab/ListScreen';
import DetailScreen from '../screens/CardTab/DetailScreen';

//생성 스크린(plus)
import CreateScreen from '../screens/Create/CreateScreen';

import MapScreen from '../screens/MapTab/MapScreen';

import CalendarScreen from '../screens/CalendarTab/CalendarScreen';

import OptionScreen from '../screens/Option/OptionScreen';

//메인탭(카드)의 스택 네비게이션
const MainStack = createStackNavigator({ 
    Main: MainScreen,
    List: ListScreen,
    Detail: DetailScreen,
    Create: CreateScreen
},
{
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons 
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    },

    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },

        headerTitleStyle: { //헤더의 폰트
            fontFamily: 'open-sans-bold'
        },

        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

//맵탭의 스택 네비게이션
const MapStack = createStackNavigator({ 
    Map: MapScreen,
},
{
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons 
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    },

    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },

        headerTitleStyle: { //헤더의 폰트
            fontFamily: 'open-sans-bold'
        },

        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

//캘린더탭의 스택 네비게이션
const CalendarStack = createStackNavigator({ 
    Calendar: CalendarScreen,
},
{
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons 
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    },

    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },

        headerTitleStyle: { //헤더의 폰트
            fontFamily: 'open-sans-bold'
        },

        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const tabScreenConfig = {
    Card: {
        //탭 안에 스택 내비게이션이 있는 것
        screen: MainStack, 
        navigationOptions: {
            tabBarLabel: 'Meals!', //탭바의 제목
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
                );
            },
            tabBarColor: Colors.primaryColor, //탭바의 컬러
            //안드로이드일때만 설정하는거
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals!</Text> : 'Meals!'
        }
    },

    Map: {
        screen: MapStack, 
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
                );
            }
        },
        tabBarColor: Colors.accentColor,
        //안드로이드일때만 설정하는거
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites!</Text> : 'Favorites!'
    },

    Calendar: {
        screen: CalendarStack, 
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
                );
            }
        },
        tabBarColor: Colors.accentColor,
        //안드로이드일때만 설정하는거
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites!</Text> : 'Favorites!'
    },
};

//탭
const MainNavigator = Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig, { //안드로이드 일때
        activeTintColor: 'white',
        shifting: true //애니메이션
    }) 

    : createBottomTabNavigator(tabScreenConfig, { //ios일때
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans'
            },
            activeTintColor: Colors.accentColor //해당 탭이 떠있을때 컬러
        }
    });

const OptionStack = createStackNavigator({ 
    Option: OptionScreen,
});

const Drawer = createDrawerNavigator({
    Travel: MainNavigator,
    Option: OptionStack,
},
{
    contentOptions: {
        activeTintColor: Colors.primaryColor
    }
});

export default createAppContainer(Drawer);