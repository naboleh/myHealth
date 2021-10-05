import React from "react";
 import RNPickerSelect from "react-native-picker-select";
 import { StyleSheet, Text, View } from "react-native";
 export default function CatDrop () {
     return (
         <View style={styles.container}>

             <RNPickerSelect
                 placeholder={{ label: "Select a category", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Rice", value: "Rice" },
                     { label: "Noodle", value: "Noodle" },
                     { label: "Bread", value: "Bread" },
                     { label: "Meat", value: "Meat" },
                     { label: "Dairy", value: "Dairy" },
                     { label: "Fruits", value: "Fruits" },
                     { label: "Vegetables", value: "Vegetables" },
                     { label: "Dessert", value: "Dessert"},
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
 });