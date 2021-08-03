import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; 

import TravelNavigation from './navigation/TravelNavigation';

const fetchFonts = () => {
  return Font.loadAsync({ //폰트 로드
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  }); 
}

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded) { //이게 다 실행이 되어야 메인 화면이 나옴. 폰트를 로딩하는거
    return ( 
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setfontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }; 

  return (
    <TravelNavigation />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
