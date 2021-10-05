import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Picker,
} from 'react-native';

import { useState } from "react";

import BoyLion from '../components/BoyLion';
import CatDrop from '../components/CatDrop';
import TypeDrop from '../components/TypeDrop';
import PortionDrop from '../components/PortionDrop';

export default function DietTracking({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzDIETBG.png')} resizeMode= "cover" style={styles.image}>
        <Text style={styles.titleText}>Diet Tracking</Text>
            <View style={styles.overlayContainer}>
                <View style={styles.messageContainer}>
                      <Text style={styles.message}>Take charge of your health by having balanced meals!</Text>
                      <BoyLion/>
                </View>

                <Text style={styles.title2Text} >Check if your meals are balanced by selecting the Category, Type and Portion Size.
                             Click 'Check my meal!' to get feedback!</Text>

               <CatDrop/>
               <TypeDrop/>
               <PortionDrop/>

                <View style={styles.container}>
                  <TouchableOpacity style={styles.addbtn} onPress={() => navigation.navigate('null')}>
                    <Text style={styles.title2Text}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.checkmymealbtn} onPress={() => navigation.navigate('null')}>
                    <Text style={styles.title2Text}>Check my meal</Text>
                  </TouchableOpacity>
                </View>

            </View>
      </ImageBackground>
      </View>
      );
  }

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },

    topcontainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
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
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '28%',
    width: '100%',
    borderRadius: 25,

  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
  },
  title2Text: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    width: '80%',
    marginLeft: '10%',
    marginRight: '5%',
    marginTop: '7%',
    marginBottom: '3%',
  },
  message: {
      backgroundColor: '#00CCCC',
      color: 'white',
      width: '60%',
      height: '80%',
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      textAlignVertical: "center",
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginLeft: "10%",
      marginVertical: "10%",
    },
  addbtn: {
          backgroundColor: '#C0C0C0',
          color: 'white',
          width: '20%',
          height: '8%',
          borderRadius: 30,
          paddingVertical: '6%',
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          marginVertical: "20%",
          textAlign: 'center',
          justifyContent: 'flex-start',
        },

    checkmymealbtn: {
              flexDirection: 'column',
              backgroundColor: '#C0C0C0',
              color: 'white',
              width: '40%',
              height: '8%',
              borderRadius: 30,
              paddingVertical: '6%',
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginVertical: "20%",
              marginLeft: "8%",
              textAlign: 'center'
            },
    container: {
        flex: 1.2,
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row'
      }

});

