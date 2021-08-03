import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Button, Platform, Text, StyleSheet, Dimensions, KeyboardAvoidingView, Alert, ScrollView} from 'react-native';

import Input from '../../components/Input';
import colors from '../../constants/colors';

const CreateScreen = props => {
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
            <ScrollView>
                <View style={styles.form}>
                    <Input 
                        id='title'
                        label='여행지'
                        errorText='타이틀을 입력하세요!'
                        //onInputChange={inputChangeHandler}
                        //initialValue={editedProduct ? editedProduct.title : ''}
                        //initiallyValid={!!editedProduct}
                        
                        //input handling
                        keyboardType='default' 
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        returnKeyType='done' //오른쪽 밑에 리턴 키 바꾸는거
                        onEndEditing={() => console.log('onEndEditing')} //키보드가 없어지면 (현재 텍스트 인풋을 나가면)
                        onSubmitEditing={() => console.log('onSubmitEditing')} //returnKeyType을 누르면 실행
                    />

                    <Input 
                        id='title'
                        label='출발일'
                        errorText='타이틀을 입력하세요!'
                        //onInputChange={inputChangeHandler}
                        //initialValue={editedProduct ? editedProduct.title : ''}
                        //initiallyValid={!!editedProduct}
                        
                        //input handling
                        keyboardType='default' 
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        returnKeyType='done' //오른쪽 밑에 리턴 키 바꾸는거
                        onEndEditing={() => console.log('onEndEditing')} //키보드가 없어지면 (현재 텍스트 인풋을 나가면)
                        onSubmitEditing={() => console.log('onSubmitEditing')} //returnKeyType을 누르면 실행
                    />

                    <Input 
                        id='title'
                        label='도착일'
                        errorText='타이틀을 입력하세요!'
                        //onInputChange={inputChangeHandler}
                        //initialValue={editedProduct ? editedProduct.title : ''}
                        //initiallyValid={!!editedProduct}
                        
                        //input handling
                        keyboardType='default' 
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        returnKeyType='done' //오른쪽 밑에 리턴 키 바꾸는거
                        onEndEditing={() => console.log('onEndEditing')} //키보드가 없어지면 (현재 텍스트 인풋을 나가면)
                        onSubmitEditing={() => console.log('onSubmitEditing')} //returnKeyType을 누르면 실행
                    />
                </View>

                <View style={styles.buttonContainer }>
                    <View style={{width: 100}}>
                        <Button 
                            title="취소" 
                            onPress={() => {
                                props.navigation.popToTop();
                                //goBack()
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
            </ScrollView>
        </KeyboardAvoidingView>
    );

};

const styles = StyleSheet.create({
    form: {
        margin: 20
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
});

export default CreateScreen;