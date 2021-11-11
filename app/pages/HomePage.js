import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

import {useState, useEffect} from 'react';

const db = openDatabase({
  name:'MyHealth',
});


export default function HomePage({navigation}) {


  const [name, setoutName] = useState('');
  const [password, setoutPassword] = useState('');


  
  const getUserName = ()=>{
    db.transaction(txn =>{
      txn.executeSql(
        'SELECT * FROM userInfo ORDER BY id DESC LIMIT 1',
        [],  
        (txn, results)=> {
          console.log("user retrieved successfully!");
         var len =results.rows.length
         if(len>0){
           var userName1 =results.rows.item(0).Name;
           var password1 =results.rows.item(0).Password;
           console.log("user name= "+userName1);
           console.log("pasword name= "+password1);

           setoutName(userName1);
           setoutPassword(password1);
           

         }
         
        },
        error => {console.log("error "+ error.message);
      }
      )
    }

    )
  }

  useEffect(()=>{
    getUserName();
  },);

  return (
    <SafeAreaView style={styles.topcontainer}>
      <ImageBackground
        source={require('../backgrounds/zzMAINBG.png')}
        style={{height: '100%', width: '100%'}}>
        <ScrollView>
          <View style={styles.HeaderContainer}>
            <View style={{position: 'absolute', left: 10}}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  source={require('../icon/menu.png')}
                  style={{
                    height: 35,
                    width: 35,
                  }}
                />
              </TouchableOpacity>
            </View>

            <Image
              source={require('../icon/icon.jpeg')}
              style={{
                height: 55,
                width: 55,
                flexDirection: 'row',
                marginLeft: '43%',
              }}
            />
             <Text style={styles.subtitleText}>
            {name}
        </Text>
          
          </View>

          <View style={styles.carouselContainer}>
            <Image
              source={require('../backgrounds/carousel-image.jpg')}
              style={styles.carouselimg}
            />
          </View>

          <View style={styles.overlayContainer}>
            <TouchableOpacity
              style={styles.MainPageItem}
              onPress={() => navigation.navigate('ApptsStack')}>
              <Image
                style={[styles.image, {backgroundColor: '#c76d73'}]}
                source={require('../icon/zzAPPT.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.MainPageItem}
              onPress={() => navigation.jumpTo('EConsultsLandingPage')}>
              <Image
                style={[styles.image, {backgroundColor: '#83b7b5'}]}
                source={require('../icon/zzECONSULT.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.MainPageItem}
              onPress={() => navigation.navigate('HealthRecords')}>
              <Image
                style={[styles.image, {backgroundColor: '#edd0d9'}]}
                source={require('../icon/zzHEALTH.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.MainPageItem}
              onPress={() => navigation.navigate('DietTracking2')}>
              <Image
                style={[styles.image, {backgroundColor: '#f2ae80'}]}
                source={require('../icon/zzDIET.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.MainPageItem}
              onPress={() => navigation.navigate('Payment')}>
              <Image
                style={[styles.image, {backgroundColor: '#f4d286'}]}
                source={require('../icon/zzPAYMENT.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.MainPageItem}
              onPress={() => navigation.navigate('Caregiver')}>
              <Image
                style={[styles.image, {backgroundColor: '#dff5f4'}]}
                source={require('../icon/zzCAREGIVER.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  topcontainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginVertical: '2%',
    paddingBottom: 20,
  },
  carouselContainer: {
    flexShrink: 0.1,
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselimg: {
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContainer: {
    flexShrink: 0.8,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    marginBottom: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingVertical: 10,
  },
  MainPageItem: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 47,
  },
  image: {
    backgroundColor: '#fff',
    width: 155,
    height: 135,
    borderRadius: 15,
    alignItems: 'center',
    padding: 7,
  },
  subtitleText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    paddingLeft:80,
   
  },
});
