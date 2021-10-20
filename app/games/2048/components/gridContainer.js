import {
  View,
  Text,
}  from 'react-native'
import React from 'react'
import GridRow from './gridRow'

import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

const styles = {
  container:{
    width: "100%",
    height: "100%",
    position: 'absolute',
    flex: 1,
    overflow: 'hidden',
    paddingHorizontal: Dimensions.size["2"],
    paddingVertical: Dimensions.size["2"],
    flexDirection: 'column',
    backgroundColor: '#A15D98'
  }
}

const GridContainer = () => {
  return (
    <View style={styles.container}>
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </View>
  )
}

export default GridContainer
