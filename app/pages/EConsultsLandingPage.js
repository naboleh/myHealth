
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
        <ImageBackground source={require('../backgrounds/EConsultsLANDING.png')} style={{height:'100%', width: '100%'}}>
           <View style={styles.topcontainer}>
                       <TouchableOpacity
                       style={styles.backbutton}
                       onPress={() => navigation.navigate('HomePage')}>
                           <Image
                              source={require('../icon/backicon.png')}
                           />
                       </TouchableOpacity>
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
           flexDirection: 'row',
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
     height: 55,
     flexDirection: 'row',
     alignItems: 'center',
     marginVertical: '63%',
     marginLeft: "15%",
     borderRadius: 5,
     },
  startsessionbutton: {
    backgroundColor: '#edd0d9',
    color: '#003f5c',
    width: "60%",
    height: 70,
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    fontSize:  18,
    fontFamily: 'Quicksand-Medium',
    marginVertical: "75%",
    marginLeft: "30%",
  },
});