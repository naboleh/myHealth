// after answering Q&A, before video call and chat

//not yet done - will do up the article and know your body page as well

import React, {useState} from 'react';
import {Button, Overlay} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import DelayIncomingCalls from '../components/DelayIncomingCall'; //image styles change inside delayincomingcall.js

export default function EConsultsWaitingRoom({navigation}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../backgrounds/WaitingRoom.png')}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.topnavcontainer}>
          <Text style={styles.topnavcontainer}>E-Consultation</Text>
        </View>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.navigate('HomePage')}>
          <Image source={require('../icon/backicon.png')} />
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EConsultsVideo')}>
            <DelayIncomingCalls />
          </TouchableOpacity>
        </View>

        <View style={styles.bodycontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsPage')}>
            <Text style={styles.articlebutton}>Articles and Programmes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('KnowYourBodyLanding')}>
            <Text style={styles.bodybutton}>Know Your Body</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bodycontainer}>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.gamebutton}>Games</Text>
          </TouchableOpacity>

          <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{
              width: '90%',
              height: '80%',
              backgroundColor: 'white',
              borderRadius: 25,
            }}>
            <View style={{marginTop: 10}}>
              <Text style={styles.title2Text}>Select your game!</Text>
              <View style={styles.mascotContainer2}>
                <Image
                  source={require('../mascots/fatherLion.png')}
                  style={{
                    height: 150,
                    width: 150,
                    position: 'absolute',
                    left: 100,
                  }}
                />
                <Image
                  source={require('../mascots/boylion.png')}
                  style={{
                    height: 150,
                    width: 150,
                    position: 'absolute',
                    left: 28,
                  }}
                />
                <Image
                  source={require('../mascots/daughterLion.png')}
                  style={{
                    height: 140,
                    width: 110,
                    position: 'absolute',
                    left: 180,
                  }}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GameSnake');
                  toggleOverlay();
                }}>
                <Text style={styles.gamesbutton}>Snake</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Game2048');
                  toggleOverlay();
                }}>
                <Text style={styles.gamesbutton}>2048</Text>
              </TouchableOpacity>
            </View>
          </Overlay>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: 10,
    top: 8,
  },
  topnavcontainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#003f5c',
    height: 60,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
    paddingTop: 10,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bodycontainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 40,
  },
  articlebutton: {
    backgroundColor: '#ffffff',
    color: '#003f5c',
    height: 50,
    width: 105,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 11,
    fontFamily: 'Quicksand-Bold',
    marginTop: '30%',
    marginLeft: '10%',
  },
  bodybutton: {
    backgroundColor: '#ffffff',
    color: '#003f5c',
    height: 48,
    width: 80,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    marginHorizontal: 65,
    fontSize: 11,
    fontFamily: 'Quicksand-Bold',
  },
  gamebutton: {
    backgroundColor: '#ffffff',
    color: '#003f5c',
    height: 35,
    width: 70,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    marginLeft: 270,
    marginVertical: 140,
    fontSize: 11,
    fontFamily: 'Quicksand-Bold',
  },
  //-------------------------------------overlay styles
  mascotContainer2: {
    width: '85%',
    height: '30%',
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 40,
  },
  gamesbutton: {
    backgroundColor: '#f6ce87',
    color: 'black',
    width: '50%',
    height: 70,
    borderRadius: 35,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    marginBottom: '5%',
    marginLeft: '25%',
  },
  title2Text: {
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '5%',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
});
