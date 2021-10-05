import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Picker,
} from 'react-native';

import { useState } from "react";

import BoyLion from '../components/BoyLion';
import App from '../components/CatDrop';

export default function DietTracking({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzDIETBG.png')} resizeMode= "cover" style={styles.image}>
        <Text style={styles.titleText}>Diet Tracking</Text>
            <View style={styles.overlayContainer}>
                <View style={styles.messageContainer}>
                      <Text style={styles.message}>Take charge of your health by having balanced meals!</Text>
                      <BoyLion/>
                </View>

                <TouchableOpacity style={styles.firstdietbtn} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>Category</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>Type</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.carepersonbtn} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.title2Text}>Portion size</Text>
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.addbtn} onPress={() => navigation.navigate('nil')}>
                    <Text style={styles.title2Text}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.checkmymealbtn} onPress={() => navigation.navigate('nil')}>
                    <Text style={styles.title2Text}>Check my meal</Text>
                  </TouchableOpacity>
                  <Category/>
                </View>
                <App/>
            </View>
      </ImageBackground>
      </View>
      );
  }

  const Category = () => {
    const [selectedValue, setSelectedValue] = useState("Category");
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Rice" value="Rice" />
          <Picker.Item label="Noodle" value="Noodle" />
          <Picker.Item label="Bread" value="Bread" />
          <Picker.Item label="Meat" value="Meat" />
          <Picker.Item label="Dairy" value="Dairy" />
          <Picker.Item label="Fruits" value="Fruits" />
          <Picker.Item label="Vegetables" value="Vegetables" />
          <Picker.Item label="Dessert" value="Dessert" />

        </Picker>
      </View>
    );
  }

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },

    topcontainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  overlayContainer: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '90%',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%'
  },
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '28%',
    width: '100%',
    borderRadius: 25,

  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Bold',
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
      backgroundColor: '#00CCCC',
      color: 'white',
      width: '60%',
      height: '80%',
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      textAlignVertical: "center",
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginLeft: "10%",
      marginVertical: "10%",
    },
  carepersonbtn: {
      flexDirection: 'column',
      backgroundColor: '#FFAAAA',
      color: 'white',
      width: '70%',
      height: '11%',
      borderRadius: 30,
      paddingVertical: '5%',
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginVertical: "3%",
      marginLeft: "15%"
    },
    firstdietbtn: {
          flexDirection: 'column',
          backgroundColor: '#FFAAAA',
          color: 'white',
          width: '70%',
          height: '11%',
          borderRadius: 30,
          paddingVertical: '5%',
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          marginTop: "8%",
          marginBottom: "3%",
          marginLeft: "15%"
        },

    addbtn: {
          flexDirection: 'column',
          backgroundColor: '#C0C0C0',
          color: 'white',
          width: '20%',
          height: '8%',
          borderRadius: 30,
          paddingVertical: '6%',
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          marginVertical: "3%",
          textAlign: 'center'
        },

    checkmymealbtn: {
              flexDirection: 'column',
              backgroundColor: '#C0C0C0',
              color: 'white',
              width: '40%',
              height: '8%',
              borderRadius: 30,
              paddingVertical: '6%',
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginVertical: "3%",
              marginLeft: "8%",
              textAlign: 'center'
            },

    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
      }
});

