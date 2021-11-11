/* Singpass Login page
I'll look into databases later
*/

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';


export default function EConsultBill({ navigation }) {
    const [shouldShow, setShouldShow] = useState(false);
    return (
      <View style={styles.topcontainer}>
        <ImageBackground source={require('../backgrounds/zzPAYMENTBG.png')} style={{height:'100%', width: '100%'}}>
        <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <Text style={styles.titleText}>Bill Payment</Text>
            <View style={styles.overlayContainer}>
                <Text style={[styles.titleText, {marginVertical: "5%"}, {alignSelf: 'center'}]}>$24.69</Text>

              <Text style={styles.title2Text}>e-Consultation</Text>
              <Text style={styles.subtitleText}>Invoice 12345678</Text>
              <Text style={styles.subtitleText}>Date of visit: 15 Nov 2021</Text>
              <Text style={[styles.title2Text, {fontSize: 20}, {marginVertical: "5%"}]}>Itemized Bill</Text>
              <View style={{flexDirection: 'row', marginRight: '5%', justifyContent: 'space-between'}}>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>e-Consultation fee: </Text>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>$10.80</Text>
              </View>

              <View style={{flexDirection: 'row', marginRight: '5%', justifyContent: 'space-between'}}>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>Medication: </Text>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>$12.27</Text>
              </View>
              
              <View style={{flexDirection: 'row', marginRight: '5%', justifyContent: 'space-between'}}>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>Amount payable before GST: </Text>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>$23.07</Text>
              </View>

              <View style={{flexDirection: 'row', marginRight: '5%', justifyContent: 'space-between'}}>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>Amount payable after GST: </Text>
              <Text style={[styles.subtitleText, {fontSize: 15}]}>$24.69</Text>
              </View>
               
              <View style={{flexDirection: 'row', marginRight: '5%', justifyContent: 'space-between'}}>
              <Text style={[styles.subtitleText, {fontSize: 15}, {fontFamily: 'Quicksand-Bold'}]}>Total Amount Payable: </Text>
              <Text style={[styles.subtitleText, {fontSize: 15}, {fontFamily: 'Quicksand-Bold'}]}>$24.69</Text>
              </View>

              <Text style={[styles.subtitleText, 
                          {fontSize: 14}, 
                          {marginRight: '10%'}, 
                          {marginLeft: '10%'},
                          {marginVertical: '5%'},
                          {textAlign: 'center'}]}>
                          Government subsidy already included in the bill is $11.20</Text>


            <Text style={[styles.title2Text, {marginVertical: "5%"}]}>Select payment method</Text>
              <View style={styles.paymentContainer}>
                  <TouchableOpacity
                    style={styles.payMethod}
                    onPress={() => setShouldShow(!shouldShow)}>
                    <Image style={styles.image} source={require('../icon/visamaster.png')}/>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.payMethod}
                    onPress={() => setShouldShow(!shouldShow)}>
                    <Image style={styles.image} source={require('../icon/enets.png')}/>
                  </TouchableOpacity>
              </View>
              {
                  shouldShow ? (
                    <View style={styles.inputContainer}>
                        <Text style={[styles.title2Text, {fontSize: 18}]}>Enter payment details</Text>
                        <TextInput
                          style={styles.TextInput}
                          placeholder="Card Number"
                          keyboardType="numeric"
                          placeholderTextColor="#003f5c"
                        />
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TextInput
                          style={[styles.TextInput, {width: '30%'}]}
                          placeholder="MM"
                          keyboardType="numeric"
                          placeholderTextColor="#003f5c"
                          secureTextEntry={true}
                        />
                        <Text style={styles.subtitleText}>/</Text>

                         <TextInput
                          style={[styles.TextInput, {width: '30%'}]}
                          placeholder="YYYY"
                          keyboardType="numeric"
                          placeholderTextColor="#003f5c"
                          secureTextEntry={true}
                        />
                        </View>

                        <TextInput
                          style={[styles.TextInput, {width: '40%'}]}
                          placeholder="CVV2/CVC2"
                          keyboardType="numeric"
                          placeholderTextColor="#003f5c"
                          secureTextEntry={true}
                        />


                        <TouchableOpacity 
                          onPress={() => navigation.navigate('nil')}
                          style={styles.paybutton}>
                          <Text style={[styles.subtitleText, {fontFamily: 'Quicksand-Bold'}]}>Pay</Text>
                        </TouchableOpacity>
                    </View>
                  ) : null
              }
             

            </View>
            </ScrollView>
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
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '90%',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    marginRight: '5%'
  },
  paymentContainer: {
    flex: 2,
    backgroundColor: '#fff',
    width: '95%',
    height: '100%',
    marginLeft: '3%',
    marginBottom: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%'
  },
  inputContainer: {
    flex: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '90%',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    marginVertical: '5%',
  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
    title2Text: {
    marginLeft: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
  },
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: '5%',
    textAlign: 'justify',
    justifyContent: 'space-between'
  },
  paybutton: {
    flexDirection: 'column',
    backgroundColor: '#f6ce87',
    color: 'black',
    width: '90%',
    height: '22%',
    borderRadius: 15,
    paddingVertical: '5%',
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    marginVertical: '2%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextInput: {
      backgroundColor: '#F6F6F6',
      width: "90%",
      height: 50,
      borderRadius: 15,
      justifyContent: 'center',
      fontFamily: 'Quicksand-Medium',
      fontSize:  18,
      textAlign: 'center',
      marginVertical: "2%",
      marginLeft: "5%",
 
    },
  payMethod: {
    backgroundColor: '#F6F6F6',
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15,
  },
  image: {
    backgroundColor: "#fff",
    width: '100%',
    height: '100%',
    padding: 7,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    resizeMode: "center"
  },
});
