
// after answering Q&A, before video call and chat

//not yet done - will do up the article and know your body page as well

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function EConsultsWaitingRoom({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/WaitingRoomBG.png')} style={{height:'100%', width: '100%'}}>
           <TouchableOpacity onPress={() => navigation.navigate('EConsultsQnASymptoms')}>
              <Text style={styles.startsessionbutton}>Start Session</Text>
           </TouchableOpacity>
        </ImageBackground>
       </View>
              );
          }

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
  startsessionbutton: {
    backgroundColor: '#edd0d9',
    color: '#003f5c',
    width: "40%",
    height: 70,
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    fontSize:  18,
    fontFamily: 'Quicksand-Medium',
    marginVertical: "75%",
    marginLeft: "30%",
  },
});