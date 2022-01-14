import React from "react"
import {View,Text,StyleSheet} from 'react-native'

const Box=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
    },
    box1:{
        flex: 1,
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
export default Box