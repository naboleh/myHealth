import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

export default function EConsultsQnAFever({ navigation }) {

    return (
          <View style={styles.topcontainer}>
            <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
            <Text style={styles.titleText}>E-Consultations</Text>

                <View style={styles.overlayContainer}>
                    <View style={styles.mascot}>
                        <NurseLion width={260} height={220} />
                    </View>

                    <View style={styles.symptomsQ} onPress={() => navigation.navigate('nil')}>
                      <Text style={styles.subtitleText}>Do you have a fever above 38°C?</Text>
                    </View>


                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('EConsultsQnADrugName')}>
                      <Text style={styles.title2Text}>Back</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('EConsultsStart')}>
                     <Text style={styles.title2Text}>Next</Text>
                    </TouchableOpacity>

                </View>
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
        height: '90%',
        width: '90%',
        borderRadius: 25,
        marginLeft: '5%',
        marginBottom: '5%'
      },
      mascot: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: '#fff',
        height: '40%',
        width: '38%',
        borderRadius: 25,
        marginLeft: '19%',
        marginBottom: '10%',
      },
      symptomsQ: {
              flexDirection: 'column',
              backgroundColor: '#fbe5a0',
              textAlign: 'center',
              color: 'black',
              width: '80%',
              height: '15%',
              borderRadius: 15,
              paddingVertical: '5%',
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginVertical: "2%",
              marginLeft: "10%"
      },
      titleText: {
        marginLeft: "7%",
        marginVertical: "5%",
        fontFamily: 'Roboto-Medium',
        fontSize: 28,
      },
      title2Text: {
        marginLeft: "10%",
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
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
          backgroundColor: '#e9b430',
          color: 'white',
          width: '15%',
          height: '8%',
          borderRadius: 15,
          textAlign: 'center',
          justifyContent: 'center',
          textAlignVertical: "center",
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          marginLeft: "5%",
          marginVertical: "38%",
        },
        nextbutton: {
              backgroundColor: '#e9b430',
              color: 'white',
              width: '15%',
              height: '8%',
              borderRadius: 15,
              textAlign: 'center',
              justifyContent: 'center',
              textAlignVertical: "center",
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginLeft: "81%",
              marginVertical: "-51%",
            },

    });