
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

import NurseLion from '../mascots/LionNurse.js';

export default function KnowYourBody({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/BodyMainBG.png')} style={{height:'100%', width: '100%'}}>
            <View style={styles.topcontainer}>
                        <View style={styles.topnavcontainer}>
                             <Text style={styles.topnavcontainer}>Know Your Body</Text>
                        </View>
                       <TouchableOpacity
                       style={styles.backbutton}
                       onPress={() => navigation.navigate('EConsultsWaitingRoom')}>
                           <Image
                              source={require('../icon/backicon.png')}
                           />
                       </TouchableOpacity>
                    </View>
                        <View style={styles.startcontainer}>
                         <View style={styles.mascot}>
                            <NurseLion width={200} height={200} />
                            <Text style={styles.subtitleText}>The Human Body is an amazing machine. Learn more about the human body and prevention tips to keep your body healthy here.</Text>
                          <TouchableOpacity onPress={() => navigation.navigate('KnowYourBody')}>
                               <Text style={styles.closebutton}>Learn More</Text>
                          </TouchableOpacity>
                         </View>
                    </View>

                   </ImageBackground>
                  </View>
                         );
                     }

const styles = StyleSheet.create({
 mascot:{
        height: '100%',
        width: '100%',
        marginLeft: '35%',

      },
  container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    topcontainer: {
           width: '100%',
           height: 55,
           flexDirection: 'column',
           alignItems: 'center',
           marginBottom: 20,
           borderRadius: 5,
         },
   backbutton: {
       width: 40,
       height: 40,
       position: 'absolute',
       left: 10,
       top: 8
     },
   startcontainer: {
     width: '100%',
     height: 380,
     width: 270,
     alignItems: 'center',
     marginTop: "20%",
     marginLeft: "18%",
     backgroundColor:'#ffffff',
     opacity: 0.9,
     borderRadius: 20
     },

  subtitleText: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 12,
      textAlign: 'center',
      marginLeft: "-5%",
      marginTop: "5%",
      width: "75%",
    },

  closebutton: {
    backgroundColor: '#808080',
    color: '#ffffff',
    height: 35,
    width: 95,
    borderRadius: 65,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    fontSize:  11.5,
    fontFamily: 'Roboto-Bold',
    marginLeft: "14%",
    marginTop: "10%",
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
});