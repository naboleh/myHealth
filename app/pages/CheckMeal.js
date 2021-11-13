import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Picker,
  Image,
} from 'react-native';

import { useState } from "react";

import BoyLion from '../components/BoyLion';

export default function CheckMeal({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzDIETBG.png')} style={{height:'100%', width: '100%'}}>
        <View style={styles.topbarcontainer}>
           <View style={styles.topnavcontainer}>
              <Text style={styles.topnavcontainer}>Diet Tracking</Text>
            </View>
            <TouchableOpacity
             style={styles.backbutton}
                onPress={() => navigation.navigate('DietTracking2')}>
                <Image
                source={require('../icon/backicon.png')}
                />
             </TouchableOpacity>
             </View>
            <View style={styles.overlayContainer}>
                <View style={styles.messageContainer}>
                      <Image source={require('../icon/5stars.png')} style={[{alignItems: 'center', height:'40%', width: '100%', marginVertical: '15%'}]}/>
                </View>

              <Text style={styles.subtitleText}>Well balanced!</Text>
              <Text style={[styles.subtitle2Text, {marginVertical: '5%'}]}>Your meal of: </Text>
              
               <View style={{flexDirection: 'row', marginRight: '50%', justifyContent: 'space-between'}}>
                <Text style={[styles.subtitleText, {fontSize: 15, marginLeft: '15%'}]}>Rice</Text>
                <Text style={[styles.subtitleText, {fontSize: 15}]}>1/4</Text>
               </View>

              <View style={{flexDirection: 'row', marginRight: '50%', justifyContent: 'space-between'}}>
                <Text style={[styles.subtitleText, {fontSize: 15, marginLeft: '15%'}]}>Vegetables</Text>
                <Text style={[styles.subtitleText, {fontSize: 15}]}>1/2</Text>
               </View>

               <View style={{flexDirection: 'row', marginRight: '50%', justifyContent: 'space-between'}}>
                <Text style={[styles.subtitleText, {fontSize: 15, marginLeft: '15%'}]}>Meat</Text>
                <Text style={[styles.subtitleText, {fontSize: 15}]}>1/4</Text>
               </View>

               <Text style={[styles.subtitle2Text, {marginVertical: '5%'}]}>follows the quarter, quarter, half rule.</Text>

               <Text style={styles.subtitle2Text}>Well done!</Text>


                <View style={[styles.container, {alignItems: 'center'}]}>
                  <TouchableOpacity style={styles.checkmymealbtn} onPress={() => navigation.navigate('DietTracking2')}>
                    <Text style={styles.buttonText}>Check another meal</Text>
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
  subtitleText: {
    marginLeft: "7%",
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
  },
  subtitle2Text: {
    marginHorizontal: "7%",
    fontFamily: 'Quicksand',
    fontSize: 19,
  },
  buttonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    textAlign: 'center',
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
    width: '100%',
    height: '40%',
    borderRadius: 25,
    justifyContent: 'center',
    marginVertical: '5%',
  },
  container: {
    flex: 1,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: 'space-between',
    marginHorizontal: '15%',
  },
  topbarcontainer: {
   width: '100%',
   height: 55,
   flexDirection: 'column',
   alignItems: 'center',
   marginBottom: 20,
   borderRadius: 5,
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

