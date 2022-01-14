import React from "react"
import {View,Text,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements';

const Header=()=>{
     return(
        <View style={styles.header}>
            <Icon
                    name='bars'
                    color= '#F9EBE0'
                    type='font-awesome'
                    fontSize='10'
                />
            <Text style={styles.text}>My Anime List</Text>
                <Icon
                    name='search'
                    color= '#F9EBE0'
                    type='font-awesome'
                    fontSize='10'
                />
            </View>
    )
}
const styles =StyleSheet.create({
    header:{
        height:60,
        padding: 15,
        backgroundColor:'#cc00ff',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        color: '#F9EBE0',
        fontSize:20,
        textAlign:'left',
        fontFamily:'Prompt_500Medium'
    },
})

export default Header;