/* Add
          <Stack.Screen
           name="EConsultsStart"
           component={EConsultsStart}
           options={{headerShown: false}}
         />
*/

// Temp start page for e-Consults feature

import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

export default function EConsultsStart({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>

        <ScrollView>
          <Text style={styles.titleText}>E-Consultations</Text>

          <View style={styles.overlayContainer}>
            <TouchableOpacity style={styles.menubtn} onPress={() => navigation.navigate('EConsultsVideo')}>
              <Image style={styles.btnimg} source={require('../icon/video.png')}/>
              <Text style={styles.subtitleText}>Video Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menubtn} onPress={() => navigation.navigate('EConsultsChat')}>
              <Image style={styles.btnimg} source={require('../icon/chat.png')}/>
              <Text style={styles.subtitleText}>Text Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menubtn} onPress={() => navigation.navigate('EConsultsQnASymptoms')}>
              <Image style={styles.btnimg} source={require('../icon/nurse.png')}/>
              <Text style={styles.subtitleText}>Symptoms Q&A</Text>
            </TouchableOpacity>

             <View style={styles.container}>
               <NurseLion width={200} height={200} marginRight={40}/>
               <Text style={styles.subtitleText}>Look at my mouth moving! woahhh</Text>
             </View>
          </View>
        </ScrollView>
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
    flexDirection: 'row',
  },
  overlayContainer: {
    textAlign: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    height: 600,
    width: 375,
    borderRadius: 25,
    marginLeft: '5%',
    marginBottom: 5,
  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
  },
  subtitleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: "5%",
  },
  menubtn: {
    backgroundColor: '#F4E8C1',
    width: 155,
    height: 175,
    borderRadius: 15,
    textAlign: 'center',
    paddingVertical: 20,
    fontSize:  18,
    fontFamily: 'Quicksand-Bold',
    marginTop: "3%",
    marginLeft: "5%"
    },
  btnimg: {
    justifyContent: 'center',
    height: '43%',
    width: '40%',
    alignSelf: 'center',
    marginVertical: "10%",

  }
});

