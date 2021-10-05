import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

export default function HealthRecords({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzHEALTHBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>Health Records</Text>
            <View style={styles.overlayContainer}>
              <TouchableOpacity style={styles.menubtn}>
                <Image style={styles.btnimg} source={require('../icon/chas.png')}/>
                <Text style={styles.subtitleText}>CHAS Balance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menubtn}>
                <Image style={styles.btnimg} source={require('../icon/medication.png')}/>
                <Text style={styles.subtitleText}>Medication</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menubtn}>
                <Image style={styles.btnimg} source={require('../icon/labtest.png')}/>
                <Text style={styles.subtitleText}>Lab Test Results</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menubtn}>
                <Image style={styles.btnimg} source={require('../icon/immunisation.png')}/>
                <Text style={styles.subtitleText}>Immunisation Records</Text>
              </TouchableOpacity>

               <View style={styles.container}>
                 <NurseLion width={220} height={220} marginRight={30}/>
                 <Text style={styles.subtitleText}>Your one stop access to all Health Records!</Text>
               </View>
               
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
  container: {
    justifyContent: 'space-evenly',
    width: '50%',
    marginLeft: '18%',
    paddingHorizontal: 30,
    flexDirection: 'row'
  },
  overlayContainer: {
    flexGrow: 1,
    textAlign: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  subtitleText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: "5%",
  },
  menubtn: {
    backgroundColor: '#e8ba91',
    width: '42%',
    height: '25%',
    borderRadius: 15,
    textAlign: 'center',
    paddingVertical: 20,
    fontSize:  18,
    fontFamily: 'Quicksand-Bold',
    marginTop: "5%",
    marginLeft: "5%"
    },
  btnimg: {
    justifyContent: 'center',
    height: '40%',
    width: '40%',
    alignSelf: 'center',
    marginVertical: "10%",

  }
});



