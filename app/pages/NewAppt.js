import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

import NurseSmiling from '../components/NurseSmiling';

export default function NewAppt({navigation}) {
  return (
    <View style={styles.topcontainer}>
      <ImageBackground
        source={require('../backgrounds/zzAPPTBG.png')}
        style={{height: '100%', width: '100%'}}>
          <View style={styles.topbarcontainer}>
                     <View style={styles.topnavcontainer}>
                        <Text style={styles.topnavcontainer}>Appointments</Text>
                      </View>
                      <TouchableOpacity
                       style={styles.backbutton}
                          onPress={() => navigation.navigate('Appointments')}>
                          <Image
                          source={require('../icon/backicon.png')}
                          />
                       </TouchableOpacity>
                       </View>

          <View style={[styles.overlayContainer]}>
            <View style={[{height: '30%', width: '30%', marginVertical: '5%', marginLeft: '35%'}]}>
              <NurseSmiling />
            </View>

            <View style={styles.appt}>
              <Text style={styles.subtitleText}>You have successfully booked an appointment for</Text>
              <Text style={[styles.subtitleText, {fontFamily: 'Quicksand-Bold', marginTop: '5%'}]}>20/12/2021 (Monday) at 3pm </Text>
            
              <Text style={[styles.subtitleText, {fontFamily: 'Quicksand-Bold', marginBottom: '5%'}]}>Singapore General Hospital</Text>
              <Text style={styles.subtitleText}>Confirmation has been sent to 88771234.</Text>
              <Text style={[styles.subtitleText, {marginTop: '5%'}]}>Thank you for booking with myHealth!</Text>
            </View>

             <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Appointments')}>
                  <Text style={[styles.title2Text, {textAlign: 'center', marginLeft: 0}]}>View Appointments</Text>
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
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    paddingBottom: 35,
  },
  titleText: {
    marginLeft: '7%',
    marginVertical: '5%',
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
  title2Text: {
    marginLeft: '5%',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  subtitle2Text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    marginVertical: '5%',
  },
  btn: {
    flexDirection: 'column',
    backgroundColor: '#C98B91',
    color: 'black',
    width: '90%',
    height: '11%',
    borderRadius: 15,
    paddingVertical: '5%',
    fontSize:  18,
    fontFamily: 'Quicksand-Bold',
    marginVertical: "3%",
    marginLeft: "5%"
  },
  appt: {
    flexDirection: 'column',
    backgroundColor: '#d9aeb2',
    color: 'black',
    width: '90%',
    height: '40%',
    borderRadius: 15,
    paddingVertical: '5%',
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    marginLeft: '5%',
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
