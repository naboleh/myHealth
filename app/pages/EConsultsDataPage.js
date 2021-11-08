import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

export default function EConsultsDataPage({ navigation }) {

    return (
          <View style={styles.topcontainer}>
            <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
            <ScrollView>
            <Text style={styles.titleText}>E-Consultation</Text>

                <View style={styles.overlayContainer}>
                    <View style={styles.mascot}>
                        <NurseLion width={260} height={300} />
                    </View>

                    <View style={styles.dataQ} onPress={() => navigation.navigate('nil')}>
                      <Text style={styles.subtitleText}>Please confirm your details.</Text>
                    </View>

                    <View style={styles.questionsContainer}>

                    </View>

                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.replace('EConsultsQnAFever')}>
                      <Text style={styles.title2Text}>Edit</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.replace('EConsultsWaitingRoom')}>
                     <Text style={styles.title2Text}>Confirm</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
          </ImageBackground>
          </View>
          );
      }

    const styles = StyleSheet.create({
      topcontainer: {
        flexGrow: 1,
        justifyContent: 'center',
      },
      overlayContainer: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: '#fff',
        height: 1000,
        width: '90%',
        borderRadius: 25,
        marginLeft: '5%',
        marginBottom: '5%'
      },
      mascot: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: '#fff',
        height: '45%',
        width: '38%',
        borderRadius: 25,
        marginLeft: '19%',
        marginBottom: '-50%',
      },
      dataQ: {
              flexDirection: 'column',
              backgroundColor: '#83b7b5',
              textAlign: 'center',
              color: 'black',
              width: '80%',
              height: '7%',
              borderRadius: 15,
              paddingVertical: '5%',
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginVertical: "10%",
              marginLeft: "10%"
      },
      questionsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        bottom:10 ,
        width: 270,
        borderRadius: 10,
      },
      titleText: {
        marginLeft: "7%",
        marginVertical: "5%",
        fontFamily: 'Roboto-Medium',
        fontSize: 28,
      },
      title2Text: {
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
      },
      subtitleText: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%',
      },
      subtitle2Text: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 18,
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
        marginVertical: "5%",
      },
      backbutton: {
          backgroundColor: '#b3d3d2',
          color: 'white',
          width: '25%',
          height: '4%',
          borderRadius: 15,
          textAlign: 'center',
          justifyContent: 'center',
          textAlignVertical: "center",
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          marginLeft: '13%',
          bottom: '-1%',
        },
        nextbutton: {
              backgroundColor: '#b3d3d2',
              color: 'white',
              width: '25%',
              height: '4%',
              borderRadius: 15,
              textAlign: 'center',
              justifyContent: 'center',
              textAlignVertical: "center",
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginLeft: "65%",
              bottom: '3%',
            },

    });