import React, {useState,useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

import NurseLion from '../mascots/LionNurse.js';

import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
  name:'MyHealth',
});


export default function EConsultsDataPage({ navigation }) {

  
  const [DrugAllery, setDrugAllery] = useState('');
  const [DrugName, setDurgName] = useState('');
  const [OnMedi, setOnMedi] = useState('');
  const [MedName, setMedName] = useState('');
  const [PainPoint, setPainPoint] = useState('');
  const [Symptoms, setSymptoms] = useState('');
  const [Fever, setFever] = useState('');



  const getUserInfo = ()=>{
    db.transaction(txn =>{
      txn.executeSql(
         'SELECT * FROM QAInfo ORDER BY id DESC LIMIT 7',

        [],  
        (txn, results)=> {
          console.log("user retrieved successfully!");
         var len =results.rows.length
         if(len>0){
           var Symptoms1 =results.rows.item(6).Symptoms;
           var Painpoints1 =results.rows.item(5).Painpoints;
           var Medication1 =results.rows.item(4).Medication;
           var MedName1 =results.rows.item(3).MedName;
           var DrugAllergy1 =results.rows.item(2).DrugAllergy;
           var DrugName1 =results.rows.item(1).DrugName;
           var Fever1 =results.rows.item(0).Fever;

           console.log("Symptoms = "+Symptoms1);
           console.log("Painpoints = "+Painpoints1);
           console.log("Medication= "+Medication1);
           console.log("MedName= "+MedName1);
           console.log("DrugAllergy= "+DrugAllergy1);
           console.log("DrugName= "+DrugName1);
           console.log("Fever= "+Fever1);
  
           setPainPoint(Painpoints1);
           setSymptoms(Symptoms1);
           setFever(Fever1);
           setDrugAllery(DrugAllergy1);
           setDurgName(DrugName1);
           setOnMedi(Medication1);
           setMedName(MedName1);
           setoutName(userName1);
         


       

      
         }
         
        },
        error => {console.log("error "+ error.message);
      }
      )
    }

  
    )

 
  }
  
  useEffect(()=>{
    getUserInfo();
  },);

    return (
          <View style={styles.topcontainer}>
            <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
            <ScrollView>
            <Text style={styles.titleText}>E-Consultation</Text>

                <View style={styles.overlayContainer}>
                    <View style={styles.mascot}>
                        <NurseLion width={260} height={300} />
                    </View>

                    <View style={styles.dataQ} onPress={() => navigation.navigate('nil')}>
                      <Text style={styles.subtitleText}>Please confirm your details.</Text>
                    </View>


                    <View style={styles.questionsContainer}>
                    <Text style={styles.subtitleText}>Symptoms:</Text>


 
                    <Text style={styles.answerText}>{Symptoms}</Text>



  
                    <Text style={styles.subtitleText}>Pain Point:</Text>



                    <Text style={styles.answerText}>{PainPoint}</Text>


                    <Text style={styles.subtitleText}>Are you currently on any Medication?</Text>


                    <Text style={styles.answerText}>{OnMedi}</Text>


 
                    <Text style={styles.subtitleText}>What are the Medications</Text>

                    

                    <Text style={styles.answerText}>{MedName}</Text>


 
                    <Text style={styles.subtitleText}>Do you have any Drug Allergy?</Text>



                    <Text style={styles.answerText}>{DrugAllery}</Text>


                    <Text style={styles.subtitleText}>What are the allergies?</Text>
                   


                    <Text style={styles.answerText}>{DrugName}</Text>


    
                    <Text style={styles.subtitleText}>Do you have Fever above 38 degrees?</Text>
  

                    <Text style={styles.answerText}>{Fever}</Text>
                    </View>


                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.replace('EConsultsQnAFever')}>
                      <Text style={styles.title2Text}>Edit</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.replace('EConsultsWaitingRoom')}>
                     <Text style={styles.title2Text}>Confirm</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
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
        height: 1000,
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
        marginBottom: '-50%',
      },
      dataQ: {
              flexDirection: 'column',
              backgroundColor: '#83b7b5',
              textAlign: 'center',
              color: 'black',
              width: '80%',
              height: '7%',
              borderRadius: 15,
              paddingVertical: '5%',
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginVertical: "10%",
              marginLeft: "10%"
      },
      questionsContainer: {
        flex: 5,
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
        textAlign: 'center',
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
      answerText: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginVertical: "2%",
      },
      backbutton: {
          backgroundColor: '#b3d3d2',
          color: 'white',
          width: '25%',
          height: '4%',
          borderRadius: 15,
          textAlign: 'center',
          justifyContent: 'center',
          textAlignVertical: "center",
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          marginLeft: '13%',
          bottom: '-1%',
        },
        nextbutton: {
              backgroundColor: '#b3d3d2',
              color: 'white',
              width: '25%',
              height: '4%',
              borderRadius: 15,
              textAlign: 'center',
              justifyContent: 'center',
              textAlignVertical: "center",
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginLeft: "65%",
              bottom: '3%',
            },

    });