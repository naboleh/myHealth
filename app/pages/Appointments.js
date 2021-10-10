import React from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import NurseSmiling from '../components/NurseSmiling';

export default function Appointments({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzAPPTBG.png')} style={{height:'100%', width: '100%'}}>
        <ScrollView>

        <Text style={styles.titleText}>Appointments</Text>

            <View style={styles.overlayContainer}>
                <View style={styles.makeappt}>
                    <TouchableOpacity onPress={() => navigation.navigate('NewAppt')}>
                      <Text style={styles.newapptbutton}>Make new appointment</Text>
                    </TouchableOpacity>
                    <NurseSmiling />
                </View>

                <TouchableOpacity style={styles.apptbutton} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>3 Oct 2021 (Sunday)</Text>
                  <Text style={styles.subtitleText}>10:30 AM</Text>
                  <Text style={styles.subtitleText}>Bedok Polyclinic</Text>
                  <Text style={styles.subtitle2Text}>Clinic A</Text>
                  <Text style={styles.subtitleText}>Building 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.apptbutton} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>7 Sept 2021 (Tuesday)</Text>
                  <Text style={styles.subtitleText}>08:30 AM</Text>
                  <Text style={styles.subtitleText}>Singapore General Hospital</Text>
                  <Text style={styles.subtitle2Text}>Clinic H</Text>
                  <Text style={styles.subtitleText}>Building 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.apptbutton} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>10 Jun 2021 (Thursday)</Text>
                  <Text style={styles.subtitleText}>09:30 AM</Text>
                  <Text style={styles.subtitleText}>Singapore General Hospital</Text>
                  <Text style={styles.subtitle2Text}>Clinic H</Text>
                  <Text style={styles.subtitleText}>Building 2</Text>
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
    height: '90%',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%'
  },
  makeappt: {
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '30%',
    width: '100%',
    borderRadius: 25,
    marginLeft: '0%',
    marginBottom: 10
    
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
    fontSize: 18,
    textAlign: 'left',
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
  newapptbutton: {
      backgroundColor: '#AD656C',
      color: 'white',
      width: '90%',
      height: '90%',
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      textAlignVertical: "center",
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginLeft: "5%",
      marginVertical: "10%",
    },
  apptbutton: {
      flexDirection: 'column',
      backgroundColor: '#C98B91',
      color: 'black',
      width: '90%',
      height: '30%',
      borderRadius: 15,
      paddingVertical: '5%',
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginVertical: "2%",
      marginLeft: "5%"
    }
});
