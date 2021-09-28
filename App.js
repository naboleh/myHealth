import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import MainPageItem from './app/components/MainPageItem';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./app/icon/zzMAINBG.png')}
        style={styles.container}>
        <View style={styles.overlayContainer}>
            <View style={styles.top}>
              </View>
              <View style={styles.menuContainer}>
                <MainPageItem itemImage={require('./app/icon/zzAPPT.png')} />
                <MainPageItem itemImage={require('./app/icon/zzECONSULT.png')} />
                <MainPageItem itemImage={require('./app/icon/zzHEALTH.png')} />
                <MainPageItem itemImage={require('./app/icon/zzDIET.png')} />
                <MainPageItem itemImage={require('./app/icon/zzPAYMENT.png')} />
                <MainPageItem itemImage={require('./app/icon/zzCAREGIVER.png')} />
              </View>
        </View>
      </ImageBackground>
    );
  }
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


