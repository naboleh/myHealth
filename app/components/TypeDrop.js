import React from "react";
 import RNPickerSelect from "react-native-picker-select";
 import { StyleSheet, Text, View } from "react-native";
 export default function TypeDrop () {
     return (
         <View style={styles.container}>
             <RNPickerSelect
                 placeholder={{ label: "Select food type", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Fried", value: "Fried" },
                     { label: "Boiled", value: "Boiled" },
                     { label: "Steam", value: "Steam" },
                     { label: "Baked", value: "Baked" },
                     { label: "Grilled", value: "Grilled" },
                     { label: "Other", value: "Other" },
                 ]}
             />
         </View>
     );
 }
 const styles = StyleSheet.create({
     container : {
         flex            : 0.6,
         backgroundColor : "#fff",
         alignItems      : "center",
         justifyContent  : "flex-start",
     },
     titleText: {
         width: '70%' ,
         marginVertical: '5%',
         fontFamily: 'Roboto-Bold',
         fontSize: 12.5,
         textAlign: 'center',
       },
 });