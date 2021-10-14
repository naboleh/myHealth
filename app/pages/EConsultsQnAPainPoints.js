import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';




export default function EConsultsQnAPainPoints({ navigation }) {

    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>E-Consultations</Text>

            <View style={styles.overlayContainer}>




                <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('EConsultsQnASymptoms')}>
                   <Text style={styles.title2Text}>Back</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('EConsultsQnAMedication')}>
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
        height: '10%',
        width: '90%',
        borderRadius: 25,
        marginLeft: '5%',
        marginBottom: '2%'
      },
      mascot: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: '#fff',
        height: '40%',
        width: '38%',
        borderRadius: 25,
        marginLeft: '21%',
        marginBottom: '0%',
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
              marginVertical: "5%",
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
          marginVertical: "138%",
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
              marginLeft: "80%",
              marginVertical: "-151%",
            },

    });