import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../backgrounds/profilebg.png')} style={{height:'100%', width: '100%'}}>
          <View style={styles.topcontainer}>
                      <View style={styles.topnavcontainer}>
                           <Text style={styles.topnavcontainer}>Profile</Text>
                      </View>
                     <TouchableOpacity
                     style={styles.backbutton}
                     onPress={() => navigation.navigate('HomePage')}>
                         <Image
                            source={require('../icon/backicon.png')}
                         />
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