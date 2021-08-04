import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Button, Platform, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';

// // topTabs import
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// dummy-data import
import PLANS from '../../data/dummy-data';



const MainScreen = props => {
    const renderExItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate({routeName: 'List'})
            }}>
                <View style={styles.planCard}>
                <Text>{itemData.item.where}</Text>
                <Text>{itemData.item.departure}</Text>
                <Text>~</Text>
                <Text>{itemData.item.arrival}</Text>
                </View>
            </TouchableOpacity>
            
        );
    };

    return (
        <FlatList 
            keyExtractor={(item, index) => item.where}
            data={PLANS} 
            renderItem={renderExItem}
        />
        
    );
};

MainScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Main',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Cart' 
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate({routeName: 'Create'})
                    }}    
                />
            </HeaderButtons>
        ),

        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu' 
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}    
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    planCard: {
        margin: 25,
        padding: 10,
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        justifyContent: 'space-evenly'        
    }
});

export default MainScreen;