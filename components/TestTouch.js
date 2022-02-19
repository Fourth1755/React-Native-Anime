import React from 'react';
import { Text,TouchableOpacity,View, StyleSheet} from 'react-native';
const TestTouch=()=>{
    const _onPressButton=()=>{
        alert('You tapped the button')
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={_onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttontext}>Button</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    button:{
        alignItems:'center',
        width: 120,
        backgroundColor:'blue',
        borderRadius:2
    },
    buttontext:{
        color: 'white',
        fontSize:14,
        padding: 20
    }
})
export default TestTouch;