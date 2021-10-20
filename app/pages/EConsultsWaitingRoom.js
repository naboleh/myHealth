
// after answering Q&A, before video call and chat

//not yet done - will do up the article and know your body page as well

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import DelayIncomingCalls from '../components/DelayIncomingCall'; //image styles change inside delayincomingcall.js

export default function EConsultsWaitingRoom({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/WaitingRoom.png')} style={{height:'100%', width: '100%'}}>
              <View style={styles.topnavcontainer}>
                 <Text style={styles.topnavcontainer}>E-Consultation</Text>
              </View>
                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('HomePage')}>
                           <Image source={require('../icon/backicon.png')}/>
                       </TouchableOpacity>

                        <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('EConsultsVideo')}>
                                     <DelayIncomingCalls/>
                                    </TouchableOpacity>
                                  </View>

           <View style={styles.bodycontainer}>

           <TouchableOpacity onPress={() => navigation.navigate('EConsultsQnASymptoms')}>
              <Text style={styles.articlebutton}>Articles and Programmes</Text>
           </TouchableOpacity>

                      <TouchableOpacity onPress={() => navigation.navigate('KnowYourBody')}>
                           <Text style={styles.bodybutton}>Know Your Body</Text>
                      </TouchableOpacity>
            </View>

           <View style={styles.bodycontainer}>
           <TouchableOpacity onPress={() => navigation.navigate('Game1')}>
                <Text style={styles.gamebutton}>Games</Text>
           </TouchableOpacity>
           </View>

        </ImageBackground>
       </View>
              );
          }

const styles = StyleSheet.create({
  backbutton: {
         width: 40,
         height: 40,
         position: 'absolute',
         left: 10,
         top: 8
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
  container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    bodycontainer: {
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexDirection:"row",
          marginLeft: 40,
          marginTop: 40,
        },
  articlebutton: {
    backgroundColor: '#ffffff',
    color: '#003f5c',
    height: 50,
    width: 105,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize:  11,
    fontFamily: 'Quicksand-Bold',
    marginTop: "30%",
    marginLeft: "10%",
  },
 bodybutton: {
      backgroundColor: '#ffffff',
      color: '#003f5c',
      height: 48,
      width: 80,
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      marginHorizontal: 65,
      fontSize:  11,
      fontFamily: 'Quicksand-Bold',
    },
    gamebutton: {
          backgroundColor: '#ffffff',
          color: '#003f5c',
          height: 35,
          width: 70,
          borderRadius: 15,
          textAlign: 'center',
          justifyContent: 'center',
          paddingVertical: 8,
          marginLeft: 270,
          marginVertical: 140,
          fontSize:  11,
          fontFamily: 'Quicksand-Bold',
        },
});