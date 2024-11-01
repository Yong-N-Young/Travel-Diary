import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Button, Platform, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';

const MapScreen = props => {
    return (
        <View>
            <Text>MapScreen</Text>
        </View>  
    );
};

MapScreen.navigationOptions = navData => {
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

});

export default MapScreen;