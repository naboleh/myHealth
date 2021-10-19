import React, {useState} from 'react';

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
        marginBottom: '2%'
      },
      checkboxHead: {
        alignSelf: "center",
        marginLeft: 100,
        marginTop: 28,
        position: 'absolute'
      },
      titleText: {
        marginLeft: "7%",
        marginVertical: "5%",
        fontFamily: 'Roboto-Medium',
        fontSize: 28,
      },
      title2Text: {
        marginLeft: "10%",
        fontFamily: 'Roboto-Medium',
        fontSize: 20,
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
          width: '15%',
          height: '8%',
          borderRadius: 15,
          textAlign: 'center',
          justifyContent: 'center',
          textAlignVertical: "center",
          fontSize:  18,
          fontFamily: 'Quicksand-Bold',
          marginLeft: 20,
          marginTop: 510,
          position: 'absolute'
        },
        nextbutton: {
              backgroundColor: '#b3d3d2',
              color: 'white',
              width: '15%',
              height: '8%',
              borderRadius: 15,
              textAlign: 'center',
              justifyContent: 'center',
              textAlignVertical: "center",
              fontSize:  18,
              fontFamily: 'Quicksand-Bold',
              marginLeft: 295,
              marginTop: 510,
              position: 'absolute'
            },

    });
