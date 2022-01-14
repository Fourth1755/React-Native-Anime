import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from './components/Content';
import Datalist from './components/Datalist';
import Header from './components/Header';
import Box from './components/Box';
import Box2 from './components/Box2';
import Test from './components/Test';
import AppLoading from 'expo-app-loading';
import Main from './components/Main';
import TestVideo from './components/TestVideo';
import { useFonts, Prompt_400Regular,Prompt_500Medium } from '@expo-google-fonts/prompt';

const App=()=> {
  let [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <View style={styles.container}>
      <Header/>
      <Main/>
      <Datalist/>
      <StatusBar style="auto"/>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:40,
    fontFamily:'Prompt_500Medium'
  },
});
export default App;