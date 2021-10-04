import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

export default function BabyLion() {
  return (
    <View style={{
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
    }} >

      <WebView
        scalesPageToFit={false}
         originWhitelist={['*']}
         domStorageEnabled={true}
         source={{uri: 'file:///android_asset/babyboylion.svg'}}
         style={{
          width: 100,
          height: 100,
          backgroundColour: "transparent",
        }}
      />

      </View>
  );
};

const styles = StyleSheet.create({
	container: {
	flexGrow: 1,
	justifyContent: 'flex-end',
	alignItems: 'center'
	}
});
