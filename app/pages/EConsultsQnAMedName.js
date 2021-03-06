import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
  name:'MyHealth',
});



export default function EConsultsQnAMedName({ navigation }) {
    const [medname, setName] = useState('');

    const addUser = () =>{
  
  
      db.transaction(txn =>{
        txn.executeSql(
          'INSERT INTO QAInfo (MedName) VALUES(?)',
          [medname],
          ()=>{
            console.log('User: '+[medname] +' added successfully');

          },
          error=>{console.log('error on adding user info '+error.message);
        }
        )
      })
  
      navigation.replace('EConsultsQnADrugAllergy')
    };

    return (
          <View style={styles.topcontainer}>
            <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
            <Text style={styles.titleText}>E-Consultation</Text>

                <View style={styles.overlayContainer}>
                    <View style={styles.mascot}>
                        <NurseLion width={260} height={300} />
                    </View>

                    <View style={styles.symptomsQ}>
                      <Text style={styles.subtitleText}>Please state the name of the medication.</Text>
                    </View>

                    <View style={styles.blank}>
                     <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        placeholder='e.g. Paracetamol'
                        />
                    </View>

                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.replace('EConsultsQnAMedication')}>
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
      symptomsQ: {
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
              marginVertical: "2%",
              marginLeft: "10%"
      },
      blank: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        bottom:10 ,
        width: 270,
        borderRadius: 10,
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
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          left: 45,
          top: 5,
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
              marginLeft: "70%",
              bottom: 29,
            },

    });