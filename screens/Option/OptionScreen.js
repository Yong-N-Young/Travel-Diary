import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Button, Platform, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';

const OptionScreen = props => {
    return (
        <View>
            <Text>OptionScreen</Text>
        </View>  
    );
};

OptionScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Option',

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

export default OptionScreen;