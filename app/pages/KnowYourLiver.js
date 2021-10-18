
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

export default function KnowYourLiver({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/LiverBG.png')} style={{height:'100%', width: '100%'}}>
            <View style={styles.topcontainer}>
                        <View style={styles.topnavcontainer}>
                             <Text style={styles.topnavcontainer}>Know Your Liver</Text>
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
                             <Text style={styles.subtitleText}> Your liver is the largest solid organ in the body. The liver detoxifies the body. It removes toxins from the bloodstream that are ingested from contaminated food, alcohol and medications. To improve the health of your liver, all you need is to adopt some simple diet and lifestyle changes.
                                A healthy liver keeps your body’s regulatory, detoxification and metabolic functions in optimal condition. Fortunately, most liver problems are reversible or treatable if discovered early. </Text>
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