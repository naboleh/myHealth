
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

export default function KnowYourLungs({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/lungsBG.png')} style={{height:'100%', width: '100%'}}>
            <View style={styles.topcontainer}>
                        <View style={styles.topnavcontainer}>
                             <Text style={styles.topnavcontainer}>Know Your Lungs</Text>
                        </View>
                       <TouchableOpacity
                       style={styles.backbutton}
                       onPress={() => navigation.navigate('KnowYourBody')}>
                           <Image
                              source={require('../icon/backicon.png')}
                           />
                       </TouchableOpacity>
                    </View>
                        <View style={styles.startcontainer}>
                             <Text style={styles.subtitleText}>Do you know that in Singapore, one in five children and one in twenty adults have asthma?How about the fact that chronic obstructive pulmonary disease is one of the leading causes of death in the country? Lung diseases are common in Singapore.
                            Unfortunately, they are not diagnosed until the late stages of the disease where breathing is already difficult and overall well-being is significantly reduced. </Text>
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
     height: 370,
     width: 270,
     alignItems: 'center',
     marginTop: "65%",
     marginLeft: "18%"
     },

  subtitleText: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 12,
      textAlign: 'center',
      width: "80%",
      height: "150%",
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