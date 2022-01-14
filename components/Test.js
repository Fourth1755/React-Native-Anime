import React from "react";
import { View,Text } from "react-native";
import { StyleSheet } from "react-native";
const Test=()=>{
    return(
        <View>
            <View style={styles.header}><Text style={styles.heder_text}>Cartoon</Text></View>
            <View style={styles.container}>
                <Text>ยินดีต้อนรับเข้าสู่แอพดูการ์ตูน</Text>
                
            </View>
            <View style={styles.line}/>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        height: 200,
        backgroundColor:'#ecb3ff',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:15,
    },
    line:{
        height: 2,
        backgroundColor:'black'
    },
    header:{
        height: 40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#cc33ff',
    },
    heder_text:{
        color: '#ffff',
        fontSize:15,

    }

})
export default Test;