import React from "react"
import {View,Text,StyleSheet} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
import { Icon } from 'react-native-elements';

const Main=()=>{
    const video = React.useRef(null);
    return(
        <View style={styles.container}>
            <Video
            ref={video}
            style={styles.video}
            source={require('../assets/Fire_Force.mp4')}
            useNativeControls
            resizeMode="contain"
            isLooping
            />
        </View>
    );
}
const styles=StyleSheet.create({
    video:{
        height: 230,
    },
    container: {
        backgroundColor: '#ecf0f1',
        paddingBottom:10
      },
})

export default Main;