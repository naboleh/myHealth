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

export default function HealthRecords({navigation}) {
  return (
    <View style={styles.topcontainer}>
      <ImageBackground
        source={require('../backgrounds/zzHEALTHBG.png')}
        style={{height: '100%', width: '100%'}}>
        <ScrollView>
          <View style={styles.topbarcontainer}>
            <View style={styles.topnavcontainer}>
             <Text style={styles.topnavcontainer}>Health Records</Text>
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
            <TouchableOpacity style={styles.menubtn}>
              <Image
                style={styles.btnimg}
                source={require('../icon/chas.png')}
              />
              <Text style={styles.subtitleText}>CHAS Balance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menubtn}>
              <Image
                style={styles.btnimg}
                source={require('../icon/medication.png')}
              />
              <Text style={styles.subtitleText}>Medication</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menubtn}>
              <Image
                style={styles.btnimg}
                source={require('../icon/labtest.png')}
              />
              <Text style={styles.subtitleText}>Lab Test Results</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menubtn}>
              <Image
                style={styles.btnimg}
                source={require('../icon/immunisation.png')}
              />
              <Text style={styles.subtitleText}>Immunisation Records</Text>
            </TouchableOpacity>

            <View style={styles.container}>
              <NurseLion width={200} height={200} marginRight={40} />
              <Text style={styles.subtitleText}>
                Your one-stop access to all Health Records!
              </Text>
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
    backgroundColor: 'green',
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
    marginBottom: 60,
  },
  titleText: {
    marginLeft: '7%',
    marginVertical: '5%',
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
  subtitleText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: '5%',
  },
  menubtn: {
    backgroundColor: '#EDD0D9',
    width: 155,
    height: 175,
    borderRadius: 15,
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    marginTop: '3%',
    marginLeft: '5%',
  },
  btnimg: {
    justifyContent: 'center',
    height: '43%',
    width: '40%',
    alignSelf: 'center',
    marginVertical: '10%',
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
