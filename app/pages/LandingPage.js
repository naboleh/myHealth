/* 
The landing page that leads to the Singpass Login page
*/
import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';

import Logo from '../components/Logo';

/*fade in to landing page when loading*/
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

 React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000, //in millisec
      }
    ).start();
  }, [fadeAnim])

  return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export default LandingPage = ({navigation}) => {
    return (
      <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/zzLOGINBG.png')} style={{height: '100%', width: '100%'}}>
          <TouchableOpacity onPress={() => navigation.navigate('SingpassLogin')}>
            <Text style={styles.loginbutton}>Login with Singpass</Text>
          </TouchableOpacity>
        </ImageBackground>
        </FadeInView>
      </View>
      );
  }

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
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
      marginVertical: "125%",
      marginLeft: "15%",
    }
});
