import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function HomePage({ navigation }) {
   return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzMAINBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>Home</Text>
            <View style={styles.overlayContainer}>

                <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('Appointments')}>
                  <Image style={styles.image1} source={require('../icon/zzAPPT.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('EConsultsQnASymptoms')}>
                  <Image style={styles.image2} source={require('../icon/zzECONSULT.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('HealthRecords')}>
                  <Image style={styles.image3} source={require('../icon/zzHEALTH.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('DietTracking')}>
                  <Image style={styles.image4} source={require('../icon/zzDIET.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('Payment')}>
                  <Image style={styles.image5} source={require('../icon/zzPAYMENT.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('Caregiver')}>
                  <Image style={styles.image6} source={require('../icon/zzCAREGIVER.png')}/>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
     MainPageItem: {
        width: 150,
        height: 150,
        padding: 50,
        alignItems: 'center',
        margin: 10
    },
    image1: {
        backgroundColor: "#c76d73",
        width: 155,
        height: 135,
        margin: 1,
        borderRadius: 15,
        alignItems: 'center',
        padding: 7,
    },
    image2: {
      backgroundColor: "#83b7b5",
      width: 155,
      height: 135,
      margin: 1,
      borderRadius: 15,
      alignItems: 'center',
      padding: 7,
  },
  image3: {
    backgroundColor: "#edd0d9",
    width: 155,
    height: 135,
    margin: 1,
    borderRadius: 15,
    alignItems: 'center',
    padding: 7,
},
image4: {
  backgroundColor: "#f2ae80",
  width: 155,
  height: 135,
  margin: 1,
  borderRadius: 15,
  alignItems: 'center',
  padding: 7,
},
image5: {
  backgroundColor: "#f4d286",
  width: 155,
  height: 135,
  margin: 1,
  borderRadius: 15,
  alignItems: 'center',
  padding: 7,
},
image6: {
  backgroundColor: "#dff5f4",
  width: 155,
  height: 135,
  margin: 1,
  borderRadius: 15,
  alignItems: 'center',
  padding: 7,
},
  MainItem: {
      backgroundColor: '#e9b430',
      color: 'white',
      width: '90%',
      height: '80%',
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      textAlignVertical: "center",
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginLeft: "5%",
      marginVertical: "10%",
    },
  apptbutton: {
      flexDirection: 'column',
      backgroundColor: '#fbe5a0',
      color: 'black',
      width: '90%',
      height: '30%',
      borderRadius: 15,
      paddingVertical: '5%',
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginVertical: "2%",
      marginLeft: "5%"
    }
});
