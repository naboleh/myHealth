import React from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import MotherLion from '../components/MotherLion';

export default function BillsLO({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzPAYMENTBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>Payment</Text>

            <View style={styles.overlayContainer}>
                <View style={styles.messageContainer}>
                      <Text style={styles.message}>Choose bills to view</Text>
                      <MotherLion />
                </View>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('BillsLO')}>
                  <Text style={styles.title2Text}>Careperson 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('BillsLO')}>
                  <Text style={styles.title2Text}>Careperson 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('BillsLO')}>
                  <Text style={styles.title2Text}>Careperson 3</Text>
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
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '30%',
    width: '100%',
    borderRadius: 25,

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
  message: {
      backgroundColor: '#c89f56', 
      color: 'white',
      width: '60%',
      height: '80%',
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      textAlignVertical: "center",
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginLeft: "5%",
      marginVertical: "10%",
    },
  carepersonbtn: {
      flexDirection: 'column',
      backgroundColor: '#f6ce87',
      color: 'black',
      width: '90%',
      height: '10%',
      borderRadius: 15,
      paddingVertical: '5%',
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginVertical: "3%",
      marginLeft: "5%"
    }
});
