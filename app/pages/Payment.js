/*
Payment
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


export default function Payment({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzPAYMENTBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>Payment</Text>
            <View style={styles.overlayContainer}>
                <Text style={styles.title2Text}>View your bills</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Bills')}>
                  <Text style={styles.paymentbutton}>My bills</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('BillsLO')}>
                  <Text style={styles.paymentbutton}>My loved ones' bills</Text>
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
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    textAlign: 'left',
    textAlign: 'justify',
    marginLeft: '5%',
    marginRight: '5%',
    marginVertical: "5%",
  },
  paymentbutton: {
      backgroundColor: '#a58432',
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
    }
});
