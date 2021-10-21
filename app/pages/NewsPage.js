import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function NewsPage({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../backgrounds/article.png')} style={{height:'100%', width: '100%'}}>
            <View style={styles.topcontainer}>
                        <View style={styles.topnavcontainer}>
                             <Text style={styles.topnavcontainer}>Articles and Programmes</Text>
                        </View>
                       <TouchableOpacity
                       style={styles.backbutton}
                       onPress={() => navigation.navigate('EConsultsWaitingRoom')}>
                           <Image
                              source={require('../icon/backicon.png')}
                           />
                       </TouchableOpacity>
                       <View style={styles.articlecontainer}>
                      <TouchableOpacity onPress={() => navigation.navigate('Article1')}>
                         <Text style={styles.articlebutton}></Text>
                      </TouchableOpacity>
                     </View>
                    </View>
                   </ImageBackground>
                  </View>
                         );
                     }

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    topcontainer: {
           width: '100%',
           height: 55,
           flexDirection: 'column',
           alignItems: 'center',
           marginBottom: 20,
           borderRadius: 5,
         },
   backbutton: {
       width: 40,
       height: 40,
       position: 'absolute',
       left: 10,
       top: 8
     },
  topnavcontainer: {
      width: "100%",
      backgroundColor: '#ffffff',
      color: '#003f5c',
      height: 60,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize:  20,
      fontFamily: 'Quicksand-Bold',
      paddingTop: 10
    },
    articlecontainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginRight: "48%",
        marginBottom: "2%"
        },
    articlebutton: {
        color: '#808080',
        height: 340,
        width: 600,
        borderRadius: 25,
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        fontSize:  11.5,
        fontFamily: 'Roboto-Bold',
        marginLeft: "0%",
        borderRadius: 5,
      },
});