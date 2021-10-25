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

import Grandpa from '../mascots/Grandma.js';
import Father from '../mascots/fatherLion.png';

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

                 <View style={styles.mascotContainer}>
                                  <Image source={require('../mascots/fatherLion.png')} style={{height: 150, width: 150, position: 'absolute', left: 80 }}/>
                                  <Image source={require('../mascots/boylion.png')} style={{height: 150, width: 150, position: 'absolute', left: 8,}}/>
                                  <Image source={require('../mascots/daughterLion.png')} style={{height: 140, width: 110, position: 'absolute', left: 160, }}/>
                                </View>

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
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    marginTop: -50,
    marginBottom: 25
  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
    title2Text: {
    textAlign: 'center',
    marginTop: "10%",
    marginBottom: '5%',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  gamesbutton: {
      backgroundColor: '#f6ce87',
      color: 'black',
      width: "50%",
      height: 70,
      borderRadius: 35,
      textAlign: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginBottom: "5%",
      marginLeft: "25%"
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
   mascotContainer: {
       width: '85%',
       height: '30%',
       marginTop: 20,
       marginLeft: 30,
       justifyContent: 'center',
       marginBottom: 40,
        },
});
