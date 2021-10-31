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

export default function DietTracking2({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzDIETBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>Diet Tracking</Text>
            <View style={styles.overlayContainer}>
                <View style={styles.messageContainer}>
                      <Text style={styles.message}>Take charge of your health by having balanced meals!</Text>
                      <BoyLion/>
                </View>

                <Text style={styles.title2Text} >Check if your meals are balanced by selecting the Category, Type and Portion Size.
                             {"\n"} Click 'Check my meal' to get feedback!</Text>

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
    backgroundColor: '#FFB778',
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
    backgroundColor: '#F7A760',
    width: '30%',
    height: '30%',
    borderRadius: 30,
    textAlignVertical: 'center',
    fontSize:  18,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  checkmymealbtn: {
    backgroundColor: '#F7A760',
    width: '60%',
    height: '30%',
    borderRadius: 25,
    textAlignVertical: 'center',
    fontSize:  18,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1.2,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
    flexDirection: 'row'
  }
});

