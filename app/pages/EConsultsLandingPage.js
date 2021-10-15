
// Starting page for waiting room

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

export default function EConsultsLandingPage({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/EConsultsLANDING.png')} style={{height:'100%', width: '100%'}}>
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