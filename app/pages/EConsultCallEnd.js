import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

export default function EConsultCallEnd({ navigation }) {
    return (
          <View style={styles.topcontainer}>
            <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
            <Text style={styles.titleText}>E-Consultations</Text>

                <View style={styles.overlayContainer}>
                    <View style={styles.mascot}>
                        <NurseLion width={260} height={300} />
                    </View>

                    <View style={{flexDirection: 'column', marginRight: '5%', justifyContent: 'space-between'}, {marginVertical: '5%'}}>
                      <Text style={styles.subtitleText}>Your call with Dr. Cheng Tian Hong has ended.</Text>
                    </View>

                    <TouchableOpacity style={styles.econsultbtn}
                      onPress={() => navigation.navigate('EConsultBill')}>
                      <Text style={[styles.subtitleText, {fontFamily: 'Quicksand-Bold'}]}>View bill</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.econsultbtn}
                      onPress={() => navigation.navigate('HomePage')}>
                      <Text style={[styles.subtitleText, {fontFamily: 'Quicksand-Bold'}]}>Back to Home</Text>
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
        height: '95%',
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
      econsultbtn: {
        flexDirection: 'column',
        backgroundColor: '#b3d3d2',
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