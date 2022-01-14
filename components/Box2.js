import React from "react"
import {View,Text,StyleSheet} from 'react-native'

const Box2=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    box1:{
        width: 50,
        height: 50,
        backgroundColor:'black'
    },
    box2:{
        flex: 1,
        backgroundColor:'beige'
    },
    box3:{
        flex: 1,
        backgroundColor:'pink'
    }
})
export default Box2;