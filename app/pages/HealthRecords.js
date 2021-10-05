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
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
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
    marginVertical: "5%",
    marginLeft: "5%"
    },
  btnimg: {
    justifyContent: 'center',
    height: '60%',
    width: '50%',
    alignSelf: 'center'
  }
});



