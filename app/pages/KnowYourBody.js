
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
                             <Text style={styles.subtitleText}>The Human Body is an amazing machine. Learn more about the human body here.</Text>
                         </View>
                    <View style={styles.organcontainer}>
                      <TouchableOpacity onPress={() => navigation.navigate('KnowYourLungs')}>
                         <Text style={styles.lungsbutton}>L U N G S</Text>
                      </TouchableOpacity>
                     </View>

                    <View style={styles.organcontainer}>
                      <TouchableOpacity onPress={() => navigation.navigate('KnowYourLiver')}>
                         <Text style={styles.lungsbutton}>L I V E R</Text>
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
     width: '100%',
     height: 70,
     width: 270,
     alignItems: 'flex-end',
     marginTop: "5%",
     marginLeft: "28%"
     },

   organcontainer: {
     width: '100%',
     alignItems: 'flex-start',
     marginRight: "48%",
     marginBottom: "2%"
     },
  subtitleText: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 12,
      textAlign: 'center',
      marginLeft: "10%",
      width: "50%",
      height: "150%",
      marginBottom: "-45%"
    },
  lungsbutton: {
    backgroundColor: '#ffffff',
    color: '#808080',
    height: 35,
    width: 75,
    borderRadius: 25,
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