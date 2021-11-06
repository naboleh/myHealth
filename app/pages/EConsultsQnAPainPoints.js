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

const EConsultsQnAPainPoints = ({ navigation }) => {
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
        <Text style={styles.titleText}>E-Consultation</Text>

            <View style={styles.overlayContainer}>
                <BodyModel />

                        <View style={styles.squareHead}>
                        </View>

                        <CheckBox
                          disabled={false}
                          value={toggleHead}
                          onValueChange={(newValue) => setToggleHead(newValue)}
                          style={styles.checkboxHead}
                          tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareEyeEarNoseMouth}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleEyeEarNoseMouth}
                        onValueChange={(newValue) => setToggleEyeEarNoseMouth(newValue)}
                        style={styles.checkboxEyeEarNoseMouth}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareNeck}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleNeck}
                        onValueChange={(newValue) => setToggleNeck(newValue)}
                        style={styles.checkboxNeck}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareShoulder}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleShoulder}
                        onValueChange={(newValue) => setToggleShoulder(newValue)}
                        style={styles.checkboxShoulder}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareArm}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleArm}
                        onValueChange={(newValue) => setToggleArm(newValue)}
                        style={styles.checkboxArm}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareHand}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleHand}
                        onValueChange={(newValue) => setToggleHand(newValue)}
                        style={styles.checkboxHand}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareChest}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleChest}
                        onValueChange={(newValue) => setToggleChest(newValue)}
                        style={styles.checkboxChest}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareHeart}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleHeart}
                        onValueChange={(newValue) => setToggleHeart(newValue)}
                        style={styles.checkboxHeart}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareLiver}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleLiver}
                        onValueChange={(newValue) => setToggleLiver(newValue)}
                        style={styles.checkboxLiver}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareKidney}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleKidney}
                        onValueChange={(newValue) => setToggleKidney(newValue)}
                        style={styles.checkboxKidney}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareStomach}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleStomach}
                        onValueChange={(newValue) => setToggleStomach(newValue)}
                        style={styles.checkboxStomach}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareIntestines}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleIntestines}
                        onValueChange={(newValue) => setToggleIntestines(newValue)}
                        style={styles.checkboxIntestines}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareWaist}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleWaist}
                        onValueChange={(newValue) => setToggleWaist(newValue)}
                        style={styles.checkboxWaist}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareGenital}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleGenital}
                        onValueChange={(newValue) => setToggleGenital(newValue)}
                        style={styles.checkboxGenital}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareThigh}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleThigh}
                        onValueChange={(newValue) => setToggleThigh(newValue)}
                        style={styles.checkboxThigh}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareKnee}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleKnee}
                        onValueChange={(newValue) => setToggleKnee(newValue)}
                        style={styles.checkboxKnee}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareCalf}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleCalf}
                        onValueChange={(newValue) => setToggleCalf(newValue)}
                        style={styles.checkboxCalf}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareShin}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleShin}
                        onValueChange={(newValue) => setToggleShin(newValue)}
                        style={styles.checkboxShin}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />
                    <View style={styles.squareFoot}>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleFoot}
                        onValueChange={(newValue) => setToggleFoot(newValue)}
                        style={styles.checkboxFoot}
                        tintColors={{true: '#abede0'}, {false: '#abede0'}}
                    />



                <TouchableOpacity style={styles.backbutton} onPress={() => navigation.replace('EConsultsQnASymptoms')}>
                   <Text style={styles.title2Text}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.replace('EConsultsQnAMedication')}>
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
        marginTop: 121,
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
        squareHead: {
              backgroundColor: '#f5f5f5',
              width: '4%',
              height: '3%',
              borderRadius: 2,
              alignSelf: "center",
              marginLeft: 100,
              marginTop: 25,
              position: 'absolute'
        },
        squareEyeEarNoseMouth: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 168,
              marginTop: 52,
              position: 'absolute'
        },
        squareNeck: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 168,
              marginTop: 87,
              position: 'absolute'
        },
        squareShoulder: {
              backgroundColor: '#f5f5f5',
              width: '4%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 138.5,
              marginTop: 102,
              position: 'absolute'
        },
        squareChest: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 191,
              marginTop: 128,
              position: 'absolute'
        },
        squareHeart: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 179,
              marginTop: 147,
              position: 'absolute'
        },
        squareArm: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 118,
              marginTop: 178,
              position: 'absolute'
        },
        squareHand: {
              backgroundColor: '#f5f5f5',
              width: '5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 79,
              marginTop: 277,
              position: 'absolute'
        },
        squareLiver: {
              backgroundColor: '#f5f5f5',
              width: '4%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 164,
              marginTop: 172.5,
              position: 'absolute'
        },
        squareStomach: {
              backgroundColor: '#f5f5f5',
              width: '4%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 182,
              marginTop: 184.5,
              position: 'absolute'
        },
        squareKidney: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 200,
              marginTop: 177,
              position: 'absolute'
        },
        squareIntestines: {
              backgroundColor: '#f5f5f5',
              width: '4%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 174,
              marginTop: 217,
              position: 'absolute'
        },
        squareWaist: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 213,
              marginTop: 212,
              position: 'absolute'
        },
        squareGenital: {
              backgroundColor: '#f5f5f5',
              width: '4%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 180,
              marginTop: 262,
              position: 'absolute'
        },
        squareThigh: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 148,
              marginTop: 308,
              position: 'absolute'
        },
        squareKnee: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 151,
              marginTop: 388,
              position: 'absolute'
        },
        squareCalf: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 168,
              marginTop: 423,
              position: 'absolute'
        },
        squareShin: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 146,
              marginTop: 457,
              position: 'absolute'
        },
        squareFoot: {
              backgroundColor: '#f5f5f5',
              width: '4.5%',
              height: '3%',
              borderRadius: 2,
              marginLeft: 148,
              marginTop: 507,
              position: 'absolute'
        },





    });

export default EConsultsQnAPainPoints;