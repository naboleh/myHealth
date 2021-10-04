/* 
The landing page that leads to the Singpass Login page
*/
import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import FatherLion from '../components/FatherLion';

export default function LandingPage({ navigation }) {

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/zzLOGINBG.jpg')} style={{height: '100%', width: '100%'}}>
          <Logo/>
          <FatherLion style={{width:250, height:250}}/>
          <TouchableOpacity onPress={() => navigation.navigate('SingpassLogin')}>
            <Text style={styles.loginbutton}>Login with Singpass</Text>
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
  loginbutton: {
      backgroundColor: '#ce2029',
      color: 'white',
      width: "70%",
      height: 70,
      borderRadius: 25,
      textAlign: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      fontSize:  18,
      fontFamily: 'Quicksand-Medium',
      marginVertical: "20%",
      marginLeft: "15%"
    }
});
