/* Singpass Login page
I'll look into databases later
  const auth = useSelector((state: any) => state.auth);
  const error = useSelector((state: any) => state.err);

  const [singpassID, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin() => {
    navigate('HomePage');
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      onLogin();
    }
  }, [auth]);


  onChangeText={(singpassID)} => setUser(singpassID)}
  onChangeText={(password)} => setUser(password)}

*/

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';


export default function SingpassLogin({ navigation }) {

    return (
      <View style={styles.topcontainer}>
        <Image source={require('../icon/singpass-logo.png')} style={{height:50, width: '100%'}}/>
        <Image source={require('../icon/singpass-bg.jpg')} style={{height:'30%', width: '100%'}}/>
            <View style={styles.container}>
                <Text style={styles.titleText}>Log In</Text>

                <TextInput
                  style={styles.TextInput}
                  placeholder="Singpass ID"
                  placeholderTextColor="#003f5c" 
                 />

                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}             
                />

                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                  <Text style={styles.singpassbutton}>Log In</Text>
                </TouchableOpacity>

                <Text style={styles.subtitleText}>Visit the Singpass website if you have forgotten your Singpass ID and/or your password.</Text>

            </View>
      </View>

      );
  }

const styles = StyleSheet.create({
  topcontainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff'
  },
  titleText: {
    marginLeft: "5%",
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
  },
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: "5%"
  },
  singpassbutton: {
      backgroundColor: '#ce2029',
      color: 'white',
      width: "90%",
      height: 70,
      borderRadius: 15,
      textAlign: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginVertical: "10%",
      marginLeft: "5%"
    },
  TextInput: {
      backgroundColor: '#F6F6F6',
      width: "90%",
      height: 70,
      borderRadius: 15,
      justifyContent: 'center',
      fontFamily: 'Quicksand-Medium',
      fontSize:  18,
      textAlign: 'center',
      marginVertical: "3%",
      marginLeft: "5%",
      marginBottom: "5%"
    }
});
