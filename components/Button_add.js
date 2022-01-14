import React, { useState } from "react"
import {View,Text,StyleSheet,Button} from 'react-native'

const Button_add=(props)=>{
    const [isClick,setClick]=useState(false);
    return(
        <View>
            <Button
               onPress={()=>{
                   setClick(true)
               }}
               disabled={isClick}
               title={props.name}
               color= '#cc00ff'
            />
        </View>
    );
}

export default Button_add;
