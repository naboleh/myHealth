import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
  name:'MyHealth',
});


const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
    value: 'Yes'
}, {
    id: '2',
    label: 'No',
    value: 'No'
}]

export default function EConsultsQnAMedication({ navigation }) {

 

    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
     
    }
   

    const addUser = () =>{
  
  
      db.transaction(txn =>{
        txn.executeSql(
          'INSERT INTO QAInfo (Medication) VALUES(?)',
          [radioButtons[0].value],
          ()=>{
            console.log('User: '+[radioButtons[0].value] +' added successfully');

          },
          error=>{console.log('error on adding user info '+error.message);
        }
        )
      })
  
      navigation.replace('EConsultsQnAMedName')
    };




    return (
          <View style={styles.topcontainer}>
            <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
            <Text style={styles.titleText}>E-Consultation</Text>

                <View style={styles.overlayContainer}>
                    <View style={styles.mascot}>
                        <NurseLion width={260} height={300} />
                    </View>

                    <View style={styles.medicationQ} >
                      <Text style={styles.subtitleText}>Are you currently on any medication?</Text>
                    </View>

                    <View style={styles.radioContainer}>
                      <RadioGroup
                          radioButtons={radioButtons}
                          onPress={onPressRadioButton}
                          layout='row'
                          style={styles.radioBtn}
                      />
                    </View>

                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.replace('EConsultsQnASymptoms')}>
                      <Text style={styles.title2Text}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextbutton} onPress={addUser}>
                     <Text style={styles.title2Text}>Next</Text>
                    </TouchableOpacity>


                </View>
          </ImageBackground>
          </View>
          );
      }

    const styles = StyleSheet.create({
      topcontainer: {
        flexGrow: 1,
        justifyContent: 'center',
      },
      overlayContainer: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: '#fff',
        height: '85%',
        width: '90%',
        borderRadius: 25,
        marginLeft: '5%',
        marginBottom: '5%'
      },
      mascot: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: '#fff',
        height: '45%',
        width: '38%',
        borderRadius: 25,
        marginLeft: '19%',
        marginBottom: '10%',
      },
      medicationQ: {
              flexDirection: 'column',
              backgroundColor: '#83b7b5',
              textAlign: 'center',
              color: 'black',
              width: '80%',
              height: '15%',
              borderRadius: 15,
              paddingVertical: '5%',
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginVertical: 0.1,
              marginLeft: "10%"
      },
      radioContainer: {
        flexDirection: "row",
        marginBottom: -35,
        marginTop: 30,
        marginLeft: 120
      },
      radioBtn: {
        alignSelf: "center",

        fontSize:  18,
        fontFamily: 'Quicksand-Bold'
      },
      titleText: {
        marginLeft: "7%",
        marginVertical: "5%",
        fontFamily: 'Roboto-Medium',
        fontSize: 28,
      },
      title2Text: {
        textAlign:'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
      },
      subtitleText: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 18,
        textAlign: 'center',
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
      backbutton: {
          backgroundColor: '#b3d3d2',
          color: 'white',
          width: '20%',
          height: '6%',
          borderRadius: 15,
          textAlign: 'center',
          justifyContent: 'center',
          textAlignVertical: "center",
          marginLeft: "15%",
          marginVertical: "20%",
        },
        nextbutton: {
              backgroundColor: '#b3d3d2',
              color: 'white',
              width: '20%',
              height: '6%',
              borderRadius: 15,
              textAlign: 'center',
              justifyContent: 'center',
              textAlignVertical: "center",
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginLeft: "68%",
              marginVertical: "-29%",
            },

    });