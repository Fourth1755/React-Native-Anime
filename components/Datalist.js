import React, { useState } from "react"
import {View,Text,StyleSheet,Button,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import Button_add from "./Button_add"
import Data from './db.json'
const Datalist=()=>{
    const [searchAnime,setSearchAnime]=useState('');
    return (
        <ScrollView>
            <Text style={styles.textheader}>Anime</Text>
            {Data.map(anime=>{
                return <View style={styles.itemcontainer} key={anime.id}>
                    <View style={styles.itemlist}>
                        <Image style={styles.image}
                                source={{
                                uri: `${anime.image}`,
                        }}/>
                        <View style={styles.content}> 
                            <Text style={styles.itemtext}>{anime.name}</Text>
                            <Text>Premiered: {anime.year}</Text>
                            <Text>Studios: {anime.studios}</Text>
                            <Text>Episodes: {anime.episodes}</Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button_add name="add"/>
                    </View>
                </View>
            })}      
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    itemtext:{
        color: '#666699',
        fontSize: 20,
        fontFamily:'Prompt_500Medium',
    },
    itemcontainer:{
        flexDirection:'row', // ให้อยู่ในแนวไหน
        justifyContent:'space-between', // การวางระยะ
        //alignItems:, /มันจะตรงข้ามกับ flexDirection
        borderBottomWidth:1,
        padding: 1,
    },
    itemlist:{
       flexDirection:'row',
    },
    content:{
        paddingLeft :10
    },
    image:{
        width:70,
        height: 100,
    },
    button:{
        padding: 10,
        justifyContent:'center'
    },
    textheader:{
        fontSize:30,
        fontFamily:'Prompt_500Medium',
    }
})

export default Datalist;