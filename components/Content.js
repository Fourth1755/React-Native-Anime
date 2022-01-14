import React, { useState } from "react"
import {View,Text,StyleSheet,Button} from 'react-native'


const cal=(name,surname)=>{
    return name+' '+surname;
}

const Add=(props)=>{
    return(
        <View>
            <Text>{props.name}</Text>
            <Text>{props.id}</Text>
        </View>
    );
}
const Button_one=(props)=>{
    const [isClick,setClick]=useState(false);
    return(
        <View>
            <Button
            onPress={()=>{
                setClick(true)
            }}
            disabled={isClick}
            title={props.name}
            />
                
        </View>
    );
}
const Content=()=>{
    const x="Pooriwat";
    const y="Poolab";
    return(
        <View style={styles.Content}>
            <Text>{cal(x,y)}</Text>
            <Add name='a' id='10'/>
            <Button_one name="button"/>
            <Button_one name="add"/>
        </View>
    )
}
const styles=StyleSheet.create({
    Content:{
        flex:1,
        color:668586
    }
})

export default Content;