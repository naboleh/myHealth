import React, {useState} from 'react';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import BodyModel from '../components/BodyModel';

export default function EConsultsQnAPainPoints({ navigation }) {
    const [toggleHead, setToggleHead] = useState(false)
    const [toggleEyeEarNoseMouth, setToggleEyeEarNoseMouth] = useState(false)
    const [toggleNeck, setToggleNeck] = useState(false)
    const [toggleShoulder, setToggleShoulder] = useState(false)
    const [toggleArm, setToggleArm] = useState(false)
    const [toggleHand, setToggleHand] = useState(false)
    const [toggleChest, setToggleChest] = useState(false)
    const [toggleHeart, setToggleHeart] = useState(false)
    const [toggleLiver, setToggleLiver] = useState(false)
    const [toggleKidney, setToggleKidney] = useState(false)
    const [toggleStomach, setToggleStomach] = useState(false)
    const [toggleIntestines, setToggleIntestines] = useState(false)
    const [toggleWaist, setToggleWaist] = useState(false)
    const [toggleBack, setToggleBack] = useState(false)
    const [toggleGenital, setToggleGenital] = useState(false)
    const [toggleButtock, setToggleButtock] = useState(false)
    const [toggleThigh, setToggleThigh] = useState(false)
    const [toggleKnee, setToggleKnee] = useState(false)
    const [toggleCalf, setToggleCalf] = useState(false)
    const [toggleShin, setToggleShin] = useState(false)
    const [toggleFoot, setToggleFoot] = useState(false)
    const [toggleBones, setToggleBones] = useState(false)

    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}>E-Consultations</Text>

            <View style={styles.overlayContainer}>
                <BodyModel />

                        <CheckBox
                          disabled={false}
                          value={toggleHead}
                          onValueChange={(newValue) => setToggleHead(newValue)}
                          style={styles.checkboxHead}

                        /*<CircleCheckBox
                          checked={true}
                          onToggle={(checked) => console.log('My state is: ', checked)}
                          labelPosition={LABEL_POSITION.RIGHT}
                          label="Checkbox example"
                        /> */
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleEyeEarNoseMouth}
                        onValueChange={(newValue) => setToggleEyeEarNoseMouth(newValue)}
                        style={styles.checkboxEyeEarNoseMouth}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleNeck}
                        onValueChange={(newValue) => setToggleNeck(newValue)}
                        style={styles.checkboxNeck}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleShoulder}
                        onValueChange={(newValue) => setToggleShoulder(newValue)}
                        style={styles.checkboxShoulder}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleArm}
                        onValueChange={(newValue) => setToggleArm(newValue)}
                        style={styles.checkboxArm}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleHand}
                        onValueChange={(newValue) => setToggleHand(newValue)}
                        style={styles.checkboxHand}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleChest}
                        onValueChange={(newValue) => setToggleChest(newValue)}
                        style={styles.checkboxChest}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleHeart}
                        onValueChange={(newValue) => setToggleHeart(newValue)}
                        style={styles.checkboxHeart}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleLiver}
                        onValueChange={(newValue) => setToggleLiver(newValue)}
                        style={styles.checkboxLiver}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleKidney}
                        onValueChange={(newValue) => setToggleKidney(newValue)}
                        style={styles.checkboxKidney}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleStomach}
                        onValueChange={(newValue) => setToggleStomach(newValue)}
                        style={styles.checkboxStomach}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleIntestines}
                        onValueChange={(newValue) => setToggleIntestines(newValue)}
                        style={styles.checkboxIntestines}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleWaist}
                        onValueChange={(newValue) => setToggleWaist(newValue)}
                        style={styles.checkboxWaist}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleGenital}
                        onValueChange={(newValue) => setToggleGenital(newValue)}
                        style={styles.checkboxGenital}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleThigh}
                        onValueChange={(newValue) => setToggleThigh(newValue)}
                        style={styles.checkboxThigh}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleKnee}
                        onValueChange={(newValue) => setToggleKnee(newValue)}
                        style={styles.checkboxKnee}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleCalf}
                        onValueChange={(newValue) => setToggleCalf(newValue)}
                        style={styles.checkboxCalf}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleShin}
                        onValueChange={(newValue) => setToggleShin(newValue)}
                        style={styles.checkboxShin}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleFoot}
                        onValueChange={(newValue) => setToggleFoot(newValue)}
                        style={styles.checkboxFoot}
                    />



                <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('EConsultsQnASymptoms')}>
                   <Text style={styles.title2Text}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('EConsultsQnAMedication')}>
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
      checkboxHead: {
        alignSelf: "center",
        marginLeft: 100,
        marginTop: 18,
        position: 'absolute'
      },
      checkboxEyeEarNoseMouth: {
        marginLeft: 160,
        marginTop: 45,
        position: 'absolute'
      },
      checkboxNeck: {
        marginLeft: 160,
        marginTop: 80,
        position: 'absolute'
      },
      checkboxShoulder: {
        marginLeft: 130,
        marginTop: 95,
        position: 'absolute'
      },
      checkboxArm: {
        marginLeft: 110,
        marginTop: 170,
        position: 'absolute'
      },
      checkboxHand: {
        marginLeft: 72,
        marginTop: 270,
        position: 'absolute'
      },
      checkboxChest: {
        marginLeft: 183,
        marginTop: 125,
        position: 'absolute'
      },
      checkboxHeart: {
        marginLeft: 172,
        marginTop: 140,
        position: 'absolute'
      },
      checkboxLiver: {
        marginLeft: 155,
        marginTop: 165,
        position: 'absolute'
      },
      checkboxKidney: {
        marginLeft: 192,
        marginTop: 170,
        position: 'absolute'
      },
      checkboxStomach: {
        marginLeft: 173,
        marginTop: 177,
        position: 'absolute'
      },
      checkboxIntestines: {
        marginLeft: 165,
        marginTop: 210,
        position: 'absolute'
      },
      checkboxWaist: {
        marginLeft: 205,
        marginTop: 205,
        position: 'absolute'
      },
      checkboxGenital: {
        marginLeft: 171,
        marginTop: 255,
        position: 'absolute'
      },
      checkboxThigh: {
        marginLeft: 140,
        marginTop: 300,
        position: 'absolute'
      },
      checkboxKnee: {
        marginLeft: 143,
        marginTop: 380,
        position: 'absolute'
      },
      checkboxCalf: {
        marginLeft: 160,
        marginTop: 415,
        position: 'absolute'
      },
      checkboxShin: {
        marginLeft: 138,
        marginTop: 450,
        position: 'absolute'
      },
      checkboxFoot: {
        marginLeft: 140,
        marginTop: 500,
        position: 'absolute'
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
          marginLeft: 20,
          marginTop: 510,
          position: 'absolute'
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
              marginLeft: 280,
              marginTop: 510,
              position: 'absolute'
            },

    });
