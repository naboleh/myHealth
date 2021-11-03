import React from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import NurseSmiling from '../components/NurseSmiling';

export default function NewAppt({ navigation }) {
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../dummypages/appt_booked.png')} style={{height:'100%', width: '100%'}}>
      </ImageBackground>
      </View>
      );
  }

const styles = StyleSheet.create({
  topcontainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'green'
  },
  overlayContainer: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '90%',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%'
  }
});
