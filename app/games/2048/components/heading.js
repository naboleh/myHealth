import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import Dimensions from '../utils/dimensions';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  heading: {
    height: Dimensions.size['10%'],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 55,
    color: '#702c90',
    fontFamily: 'Quicksand-Bold',
  },
  scores: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  container: {
    backgroundColor: '#9FA8DA',
    paddingLeft: Dimensions.size['5'],
    paddingRight: Dimensions.size['5'],
    paddingTop: Dimensions.size['2'],
    paddingBottom: Dimensions.size['2'],
    borderRadius: Dimensions.size['2'],
    marginLeft: Dimensions.size['2'],
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerTitle: {
    color: '#eee4da',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Dimensions.size['3'],
  },
  containerValue: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Dimensions.size['6'],
    fontWeight: 'bold',
  },
  subtextcontainter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const Heading = props => (
  <View>
    <View style={styles.heading}>
      <Text style={styles.icon}>2048</Text>
      <View style={styles.scores}>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>SCORE</Text>
          <Text style={styles.containerValue}>{props.score}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>BEST</Text>
          <Text style={styles.containerValue}>{props.best}</Text>
        </View>
      </View>
    </View>

    <View style={styles.subtextcontainter}>
      <Text
        style={{
          fontFamily: 'Quicksand-Bold',
          alignSelf: 'flex-start',
          fontSize: 18,
          color: '#404040',
        }}>
        How to play:
      </Text>
      <Text
        style={{
          fontFamily: 'Quicksand-SemiBold',
          alignSelf: 'flex-start',
          fontSize: 16,
          color: '#858585',
        }}>
        Combine like-numbered tiles and get to 2048! Play to learn about the
        food pyramid.
      </Text>
    </View>
  </View>
);

export default Heading;
