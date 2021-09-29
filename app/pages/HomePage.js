import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import MainPageItem from '../components/MainPageItem';

export default function HomePage({ navigation }) {
    return (
      <ImageBackground
        source={require('../icon/zzMAINBG.png')}
        style={styles.container}>
        <View style={styles.overlayContainer}>
            <View style={styles.top}>
              </View>
              <View style={styles.menuContainer}>
                <MainPageItem itemImage={require('../icon/zzAPPT.png')} />
                <MainPageItem itemImage={require('../icon/zzECONSULT.png')} />
                <MainPageItem itemImage={require('../icon/zzHEALTH.png')} />
                <MainPageItem itemImage={require('../icon/zzDIET.png')} />
                <MainPageItem itemImage={require('../icon/zzPAYMENT.png')} />
                <MainPageItem itemImage={require('../icon/zzCAREGIVER.png')} />
              </View>
        </View>
      </ImageBackground>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
  },
  top:{
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer:{
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


