import React from 'react';
import { 
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import MotherLion from '../components/MotherLion';

export default function Caregiver({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzCAREGIVERBG.png')} style={{height:'100%', width: '100%'}}>
        <View style={styles.topbarcontainer}>
                  <View style={styles.topnavcontainer}>
                  <Text style={styles.topnavcontainer}>Caregiver</Text>
                   </View>
                   <TouchableOpacity
                    style={styles.backbutton}
                    onPress={() => navigation.navigate('HomePage')}>
                    <Image
                    source={require('../icon/backicon.png')}
                     />
                     </TouchableOpacity>
                     </View>

            <View style={styles.overlayContainer}>
                <View style={styles.messageContainer}>
                      <Text style={styles.message}>Hi User, who will you be caring for today?</Text>
                      <MotherLion/>
                </View>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>Tan Mei Hua</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>Ng Bee Choo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>Robert Wong</Text>
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
    marginLeft: '5%',
    marginBottom: '35%'
  },
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '30%',
    width: '100%',
    borderRadius: 25,
    marginVertical: '5%'

  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
  title2Text: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
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
      backgroundColor: '#7cbac8', 
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
      marginVertical: "8%",
      paddingHorizontal: "10%"
    },
  carepersonbtn: {
      flexDirection: 'column',
      backgroundColor: '#c7e1e0',
      color: 'black',
      width: '90%',
      height: '11%',
      borderRadius: 15,
      paddingVertical: '5%',
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginVertical: "3%",
      marginLeft: "5%"
    },
    topbarcontainer: {
     width: '100%',
     height: 55,
     flexDirection: 'column',
     alignItems: 'center',
     marginBottom: 20,
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
      backbutton: {
      width: 40,
      height: 40,
      position: 'absolute',
      left: 10,
      top: 8
     },
});
