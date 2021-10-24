import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import NurseLion from '../mascots/LionNurse.js';

export default function EConsultsQnASymptoms({ navigation }) {
    const [toggleFever, setToggleFever] = useState(false)
    const [toggleCough, setToggleCough] = useState(false)
    const [toggleColdFlu, setToggleColdFlu] = useState(false)
    const [toggleDiarrhea, setToggleDiarrhea] = useState(false)
    const [toggleNauseaVomit, setToggleNauseaVomit] = useState(false)
    const [toggleHearing, setToggleHearing] = useState(false)
    const [togglePain, setTogglePain] = useState(false)
    const [toggleBreath, setToggleBreath] = useState(false)
    const [toggleSwelling, setToggleSwelling] = useState(false)
    const [toggleVision, setToggleVision] = useState(false)
    const [toggleMenstrual, setToggleMenstrual] = useState(false)
    const [toggleOthers, setToggleOthers] = useState(false)

    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>E-Consultations</Text>

            <View style={styles.overlayContainer}>
                <View style={styles.mascot}>
                    <NurseLion width={225} height={265} />
                </View>

                <View style={styles.symptomsQ} onPress={() => navigation.navigate('nil')}>
                  <Text style={styles.subtitleText}>What symptoms are you currently experiencing?</Text>
                </View>

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    disabled={false}
                    value={toggleFever}
                    onValueChange={(newValue) => setToggleFever(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Fever</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleCough}
                    onValueChange={(newValue) => setToggleCough(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Cough</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleColdFlu}
                    onValueChange={(newValue) => setToggleColdFlu(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Cold and Flu</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleDiarrhea}
                    onValueChange={(newValue) => setToggleDiarrhea(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Diarrhea</Text>

                </View>

                <View style={styles.checkboxContainer2}>
                  <CheckBox
                    disabled={false}
                    value={toggleNauseaVomit}
                    onValueChange={(newValue) => setToggleNauseaVomit(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Nausea and Vomiting</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleHearing}
                    onValueChange={(newValue) => setToggleHearing(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Hearing Problem</Text>

                </View>

                <View style={styles.checkboxContainer3}>
                  <CheckBox
                    disabled={false}
                    value={togglePain}
                    onValueChange={(newValue) => setTogglePain(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Body Pain</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleBreath}
                    onValueChange={(newValue) => setToggleBreath(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Shortness of Breath</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleSwelling}
                    onValueChange={(newValue) => setToggleSwelling(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Swelling</Text>

                </View>

                <View style={styles.checkboxContainer4}>
                  <CheckBox
                    disabled={false}
                    value={toggleVision}
                    onValueChange={(newValue) => setToggleVision(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Vision Problem</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleMenstrual}
                    onValueChange={(newValue) => setToggleMenstrual(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Menstrual Problem</Text>

                  <CheckBox
                    disabled={false}
                    value={toggleOthers}
                    onValueChange={(newValue) => setToggleOthers(newValue)}
                    style={styles.checkbox}
                  />
                  <Text style={styles.label}>Others</Text>

                </View>



                <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('EConsultsLandingPage')}>
                   <Text style={styles.title2Text}>Back</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('EConsultsQnAPainPoints')}>
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
        height: '10%',
        width: '90%',
        borderRadius: 25,
        marginLeft: '5%',
        marginBottom: '5%'
      },
      mascot: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: '#fff',
        height: '40%',
        width: '38%',
        borderRadius: 25,
        marginLeft: '21%',
        marginBottom: '0%',
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
              marginVertical: "5%",
              marginLeft: "10%"
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: -35,
        marginLeft: 15
      },
      checkboxContainer2: {
        flexDirection: "row",
        top: 35,
        marginBottom: -25,
        marginLeft: 40
      },
      checkboxContainer3: {
        flexDirection: "row",
        top: 60,
        marginBottom: -20,
        marginLeft: 20
      },
      checkboxContainer4: {
        flexDirection: "row",
        top: 88,
        marginBottom: -32,
        marginLeft: 14
      },
      checkbox: {
        alignSelf: "center"
      },
      label: {
        marginTop: 7,
        marginRight: 7,
        fontFamily: 'Quicksand-Medium',
        fontSize: 12,
        textAlign: "left",
      },

      titleText: {
        marginLeft: "7%",
        marginVertical: "5%",
        fontFamily: 'Roboto-Medium',
        fontSize: 28,
      },
      title2Text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        textAlign:'center',
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
          marginLeft: "13%",
          marginVertical: "38%",
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
              marginLeft: "70%",
              marginVertical: "-47%",
            },

    });

