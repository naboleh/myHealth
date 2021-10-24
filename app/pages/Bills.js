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
                <Text style={[styles.title2Text, {marginVertical: "5%"}]}>View your bills</Text>

            <TouchableOpacity
              style={styles.billbutton}
              onPress={() => navigation.navigate('EConsultBill')}>
              <Text style={styles.title2Text}>PATIENT NAME</Text>
              <Text style={[styles.title2Text, {fontSize: 20}, , {marginVertical: "5%"}]}>e-Consultation</Text>
              <Text style={styles.subtitleText}>Invoice 12345678</Text>
              <Text style={styles.subtitleText}>Balance Due: $24.69</Text>
              <Text style={styles.subtitleText}>Date of visit: 27 Oct 2021</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.billbutton}
              onPress={() => navigation.navigate('nil')}>
              <Text style={styles.title2Text}>PATIENT NAME</Text>
              <Text style={[styles.title2Text, {fontSize: 20}, , {marginVertical: "5%"}]}>Singapore General Hospital</Text>
              <Text style={styles.subtitleText}>Invoice 9876543</Text>
              <Text style={styles.subtitleText}>Balance Due: $38.90</Text>
              <Text style={styles.subtitleText}>Date of visit: 22 Oct 2021</Text>
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
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'justify',
  },
  billbutton: {
    flexDirection: 'column',
    backgroundColor: '#f6ce87',
    color: 'black',
    width: '90%',
    height: '32%',
    borderRadius: 15,
    paddingVertical: '5%',
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    marginVertical: '2%',
    marginLeft: '5%',
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
