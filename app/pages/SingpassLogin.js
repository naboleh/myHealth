

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({
  name:'MyHealth',
});

export default function SingpassLogin({navigation}) {

  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const [name, setoutName] = useState('');
  const [password, setoutPassword] = useState('');

  const createTables=()=>{
    db.transaction(txn =>{
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS userInfo (id INTEGER PRIMARY KEY AUTOINCREMENT, Name VARCHAR(30), Password VARCHAR(30))',
        [],
        ()=>{
          console.log('creating table successfully');
        },
        error =>{
          console.log('error on creating table '+error.message);

        },
      );
    });
  };

  const addUser = () =>{
    createTables();
    if(!UserName || !Password){
      alert("Enter category and Password");
      return false;
    }

    db.transaction(txn =>{
      txn.executeSql(
        'INSERT INTO userInfo (Name, Password) VALUES(?,?)',
        [UserName,Password],
        ()=>{
          console.log('User: '+[UserName] +' added successfully');
          console.log('Password: '+[Password] +' added successfully');
          setUsername("");
        },
        error=>{console.log('error on adding user info '+error.message);
      }
      )
    })

    navigation.navigate('DrawerNav')
  };

  return (
    <View style={styles.topcontainer}>
      <Image
        source={require('../icon/singpass-logo.png')}
        style={{height: 50, width: '100%'}}
      />
      <Image
        source={require('../icon/singpass-bg.jpg')}
        style={{height: '30%', width: '100%'}}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>Log In</Text>

        <TextInput
          style={styles.TextInput}
          placeholder="Singpass ID"
          placeholderTextColor="#003f5c"
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity  onPress={addUser}>
          <Text style={styles.singpassbutton}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.subtitleText}>
          Visit the Singpass website if you have forgotten your Singpass ID
          and/or your password.
        </Text>
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
    backgroundColor: '#fff',
  },
  titleText: {
    marginLeft: '5%',
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
  },
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '5%',
  },
  singpassbutton: {
    backgroundColor: '#ce2029',
    color: 'white',
    width: '90%',
    height: 70,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    marginVertical: '10%',
    marginLeft: '5%',
  },
  TextInput: {
    backgroundColor: '#F6F6F6',
    width: '90%',
    height: 70,
    borderRadius: 15,
    justifyContent: 'center',
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: '3%',
    marginLeft: '5%',
    marginBottom: '5%',
  },
});
