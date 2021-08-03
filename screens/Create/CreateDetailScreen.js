import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Button, Platform, Text, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const CreateDetailScreen = props => {
    return (
        <View>
            <Text>CreateDetailScreen</Text>

            <View style={styles.buttonContainer }>
                <View style={{width: 100}}>
                    <Button 
                        title="취소" 
                        onPress={() => {
                            props.navigation.popToTop();
                        } } 
                        color={colors.accentColor}
                    />
                </View>

                <View style={{width: 100}}>
                    <Button 
                        title="다음" 
                        onPress={() => {
                            props.navigation.navigate({routeName: 'CreateDetail'})
                        }}
                        color={colors.primaryColor}
                    />
                </View>
            </View> 
        </View>  
        
    );
};

const styles = StyleSheet.create({

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
});

export default CreateDetailScreen;