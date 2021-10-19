
// Starting page for waiting room

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

export default function EConsultsLandingPage({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/EConsultLANDING.png')} style={{height:'100%', width: '100%'}}>
            <View style={styles.topcontainer}>
                        <View style={styles.topnavcontainer}>
                             <Text style={styles.topnavcontainer}>E-Consultation</Text>
                        </View>
                       <TouchableOpacity
                       style={styles.backbutton}
                       onPress={() => navigation.navigate('HomePage')}>
                           <Image
                              source={require('../icon/backicon.png')}
                           />
                       </TouchableOpacity>
                    </View>
                        <View style={styles.startcontainer}>
                             <Text style={styles.subtitleText}>Welcome to MyHealth E-Consultation! {"\n"} Click start to begin a session.</Text>
                         </View>
                    <View style={styles.startcontainer}>
                      <TouchableOpacity onPress={() => navigation.navigate('EConsultsQnASymptoms')}>
                         <Text style={styles.startsessionbutton}>Start Session</Text>
                      </TouchableOpacity>
                     </View>
                   </ImageBackground>
                  </View>
                         );
                     }

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
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
     width: '110%',
     height: 55,
     flexDirection: 'row',
     alignItems: 'center',
     marginLeft: "12%",
     marginTop: "8%",
     borderRadius: 5,
     marginVertical: "15%"
     },
  subtitleText: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 15,
      textAlign: 'center',
      marginLeft: "10%",
      width: "50%",
      height: "150%",
      marginBottom: "-45%"
    },
  startsessionbutton: {
    backgroundColor: '#edd0d9',
    color: '#003f5c',
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    fontSize:  15,
    fontFamily: 'Quicksand-Medium',
    marginLeft: "30%",
    marginTop: "20%"
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