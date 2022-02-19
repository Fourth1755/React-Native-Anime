import { StyleSheet,FlatList,Text, View,TextInput,Image} from "react-native";
import DATA from './db.json'
import React, { useState } from "react"
const Item=({dataitem})=>{
    return(
        <View style={styles.itemlist}>
            <Image style={styles.image}
                    source={{
                    uri: `${dataitem.image}`,
            }}/>
            <View style={styles.content}> 
                <Text style={styles.itemtext}>{dataitem.name}</Text>
                <Text>Premiered: {dataitem.year}</Text>
                <Text>Studios: {dataitem.studios}</Text>
                <Text>Episodes: {dataitem.episodes}</Text>
            </View>
        </View>
    );
}
const TestFlatlist=()=>{
    const renderItem=({item})=>(
        <Item dataitem={item}/>
    )
    const [searchAnime,setSearchAnime]=useState('');
    const [filterData,setfilterData]=useState(DATA);
    const searchFilter=(text)=>{
        if(text){
            const newData=DATA.filter((item)=>{
                const itemData=item.name ?
                        item.name.toUpperCase() 
                        :''.toUpperCase();
                const textData=text.toUpperCase();
                return itemData.indexOf(textData)>-1;
            });
            setfilterData(newData);
            setSearchAnime(text);
        }
        else{
            setfilterData(DATA);
            setSearchAnime(text);
        }
        
    }
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Search here"
                value={searchAnime}
                underlineColorAndroid="transparent"
                onChangeText={(text)=>
                    searchFilter(text)
                }
            />
            <FlatList
                data={filterData}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    itemlist:{
        flexDirection:'row',
        padding: 20,
        borderRadius:10,
        backgroundColor:'#F0FFFF',
        marginHorizontal:5,
        marginVertical:8

    },
    container:{
        marginTop: 30,
        paddingBottom: 50,
    },
    textInput:{
        height: 40,
        borderWidth:1,
        paddingLeft:20,
        margin: 5,
        borderColor:'#000',
        backgroundColor:'#FFF'
    },
    image:{
        width:70,
        height: 100,
    },
    content:{
        paddingLeft :10
    },
    itemtext:{
        color: '#666699',
        fontSize: 20,
        fontFamily:'Prompt_500Medium',
    },
})
export default TestFlatlist;