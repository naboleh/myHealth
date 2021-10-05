import React from "react";
 import RNPickerSelect from "react-native-picker-select";
 import { StyleSheet, Text, View } from "react-native";
 export default function PortionDrop () {
     return (
         <View style={styles.container}>
             <RNPickerSelect
                 placeholder={{ label: "Select portion size", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Less than 1/4", value: "Less than 1/4" },
                     { label: "1/4", value: "1/4" },
                     { label: "1/4 to 1/2", value: "1/4 to 1/2" },
                     { label: "1/2", value: "1/2" },
                     { label: "More than 1/2", value: "More than 1/2" },
                 ]}
             />
         </View>
     );
 }
 const styles = StyleSheet.create({
     container : {
         flex            : .2,
         backgroundColor : "#fff",
         alignItems      : "center",
         justifyContent  : "flex-start",
     },
 });