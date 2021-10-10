import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';

export default function HomePage({ navigation }) {
   return (
      <SafeAreaView style={styles.topcontainer}>
          <ImageBackground source={require('../backgrounds/zzMAINBG.png')} style={{height:'100%', width: '100%'}}>

          <ScrollView>

            <View style={styles.carouselContainer}>
              <Image source={require('../backgrounds/carousel-image.jpg')} style={styles.carouselimg}/>
            </View>

            <View style={styles.overlayContainer}>

                <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('Appointments')}>
                  <Image style={[styles.image, {backgroundColor: "#c76d73"}]} source={require('../icon/zzAPPT.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('ChatFragment')}>
                  <Image style={[styles.image, {backgroundColor: "#83b7b5"}]} source={require('../icon/zzECONSULT.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('HealthRecords')}>
                  <Image style={[styles.image, {backgroundColor: "#edd0d9"}]} source={require('../icon/zzHEALTH.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('DietTracking')}>
                  <Image style={[styles.image, {backgroundColor: "#f2ae80"}]} source={require('../icon/zzDIET.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('Payment')}>
                  <Image style={[styles.image, {backgroundColor: "#f4d286"}]} source={require('../icon/zzPAYMENT.png')}/>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.MainPageItem} onPress={() => navigation.navigate('Caregiver')}>
                  <Image style={[styles.image, {backgroundColor: "#dff5f4"}]} source={require('../icon/zzCAREGIVER.png')}/>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
      </SafeAreaView>
      );
  }

const styles = StyleSheet.create({
  topcontainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginVertical: "2%",
  },
  carouselContainer: {
    flexShrink: 0.1,
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  carouselimg: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContainer: {
    flexShrink: 0.8,
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 25,
    marginLeft: '3%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "2%",
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
  MainPageItem: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40
  },
  image: {
    backgroundColor: "#fff",
    width: 155,
    height: 135,
    margin: 1,
    borderRadius: 15,
    alignItems: 'center',
    padding: 7,
  },
  MainItem: {
    backgroundColor: '#e9b430',
    width: '90%',
    height: '80%',
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize:  18,
    fontFamily: 'Quicksand-Bold',
    marginLeft: "5%",
  }
});
