import {StyleSheet, View,Text,ScrollView } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Ionicons } from "@expo/vector-icons";
import TestFlatlist from "./TestFlatlist";
import Datalist from "./Datalist";
import Main from "./Main";
const HomeScreen=()=>{
    return(
        <ScrollView>
            <Main/>
            <Datalist/>
        </ScrollView>
    )
}
const SettingScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>Setting</Text>
        </View>
    )
}
const Tab=createBottomTabNavigator();

const TestNavigation=()=>{
    return(
       <NavigationContainer>
           <Tab.Navigator
           screenOptions={({route})=>({
             headerStyle:{
                 backgroundColor:"violet"
             },
             tabBarActiveTintColor:'gray',
             tabBarIcon:()=>{
                 let iconName;
                    if(route.name==='Home'){
                        iconName='md-home'
                    }
                    else if(route.name==='Settings'){
                        iconName='settings'
                    }
                return <Ionicons name={iconName} size={25}/>
             }
           })}>
               <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title:'หน้าหลัก',
                }}/>
                <Tab.Screen 
                name="Settings"
                component={TestFlatlist}
                options={{
                    title:"ตั้งค่า",
                }}/>
           </Tab.Navigator>
           
       </NavigationContainer>
    )
}
const styles=StyleSheet.create({
    container:{
        fontFamily:'Prompt_500Medium',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default TestNavigation;