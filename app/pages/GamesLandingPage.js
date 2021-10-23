/*
GamesLandingPage.js
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


export default function GamesLandingPage({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/WaitingRoom.png')} style={{height:'100%', width: '100%'}}>
        <View style={styles.topnavcontainer}>
          <Text style={styles.topnavcontainer}>Games</Text>
        </View>
        <TouchableOpacity
           style={styles.backbutton}
           onPress={() => navigation.navigate('EConsultsWaitingRoom')}>
               <Image
                  source={require('../icon/backicon.png')}
               />
           </TouchableOpacity>
        <Text style={styles.titleText}></Text>
            <View style={styles.overlayContainer}>
                <Text style={styles.title2Text}>Select your game!</Text>

                <TouchableOpacity onPress={() => navigation.navigate('GameSnake')}>
                  <Text style={styles.gamesbutton}>Snake</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Game2048')}>
                  <Text style={styles.gamesbutton}>2048</Text>
                </TouchableOpacity>

            </View>
      </ImageBackground>
      </View>
      );
  }

const styles = StyleSheet.create({
  topcontainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'green'
  },
  overlayContainer: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '90%',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%'
  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
    title2Text: {
    marginLeft: "5%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
  },
  gamesbutton: {
      backgroundColor: '#f6ce87',
      color: 'black',
      width: "90%",
      height: 70,
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginVertical: "5%",
      marginLeft: "5%"
  },
  topnavcontainer: {
      width: "100%",
      backgroundColor: '#ffffff',
      color: '#003f5c',
      height: 60,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize:  20,
      fontFamily: 'Quicksand-Bold',
      paddingTop: 10
  },
  backbutton: {
       width: 40,
       height: 40,
       position: 'absolute',
       left: 10,
       top: 8
  },
});
