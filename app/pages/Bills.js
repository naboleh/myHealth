/* Singpass Login page
I'll look into databases later
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


export default function Bills({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzPAYMENTBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>Payment</Text>
            <View style={styles.overlayContainer}>
                <Text style={styles.title2Text}>View your bills</Text>

                <Text style={styles.subtitleText}>You have no outstanding bills currently.</Text>
                <Text style={styles.subtitleText}>If you are expecting a bill, our system may still be processing it. Please check back tomorrow. Thank you. </Text>

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
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'justify',
    marginVertical: "5%",
  },
  singpassbutton: {
      backgroundColor: '#ce2029',
      color: 'white',
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
  TextInput: {
      backgroundColor: '#F6F6F6',
      width: "90%",
      height: 70,
      borderRadius: 15,
      justifyContent: 'center',
      fontFamily: 'Quicksand-Medium',
      fontSize:  18,
      textAlign: 'center',
      marginVertical: "3%",
      marginLeft: "5%",
      marginBottom: "5%"
    }
});
