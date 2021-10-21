/*
Stack navigator to move between the pages
1. import the page in here (e.g. import HomePage from './src/pages/HomePage';)
2. enter it as a stack.screen
3. in the page, the touchableopacity/button should have an action (e.g. onPress={() => navigation.navigate('HomePage')}>)
*/
import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LandingPage from './app/pages/LandingPage';
import SingpassLogin from './app/pages/SingpassLogin';
import HomePage from './app/pages/HomePage';
import Appointments from './app/pages/Appointments';
import NewAppt from './app/pages/NewAppt';
import Payment from './app/pages/Payment';
import Bills from './app/pages/Bills';
import BillsLO from './app/pages/BillsLO';
import Caregiver from './app/pages/Caregiver';
import HealthRecords from './app/pages/HealthRecords';
import DietTracking from './app/pages/DietTracking2';
import EConsultsChat from './app/pages/EConsultsChat';
import EConsultsQnASymptoms from './app/pages/EConsultsQnASymptoms';
import EConsultsQnAMedication from './app/pages/EConsultsQnAMedication';
import EConsultsQnAMedName from './app/pages/EConsultsQnAMedName';
import EConsultsQnADrugAllergy from './app/pages/EConsultsQnADrugAllergy';
import EConsultsQnADrugName from './app/pages/EConsultsQnADrugName';
import EConsultsQnAFever from './app/pages/EConsultsQnAFever';
import EConsultsVideo from './app/pages/EConsultsVideo';
import EConsultsLandingPage from './app/pages/EConsultsLandingPage';
import EConsultsQnAPainPoints from './app/pages/EConsultsQnAPainPoints';
import EConsultsWaitingRoom from './app/pages/EConsultsWaitingRoom';
import KnowYourBody from './app/pages/KnowYourBody';
import KnowYourLungs from './app/pages/KnowYourLungs';
import KnowYourLiver from './app/pages/KnowYourLiver';
import NewsPage from './app/pages/NewsPage';
import Article1 from './app/pages/Article1';
import Game1 from './app/games/Game1';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SingpassLogin"
          component={SingpassLogin}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ButtomNavbar"
          component={ButtomNavbar}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsChat"
          component={EConsultsChat}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsVideo"
          component={EConsultsVideo}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsQnAPainPoints"
          component={EConsultsQnAPainPoints}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsQnASymptoms"
          component={EConsultsQnASymptoms}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsQnAMedication"
          component={EConsultsQnAMedication}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsQnAMedName"
          component={EConsultsQnAMedName}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsQnADrugAllergy"
          component={EConsultsQnADrugAllergy}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsQnADrugName"
          component={EConsultsQnADrugName}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsQnAFever"
          component={EConsultsQnAFever}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EConsultsWaitingRoom"
          component={EConsultsWaitingRoom}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="KnowYourBody"
          component={KnowYourBody}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="KnowYourLungs"
          component={KnowYourLungs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="KnowYourLiver"
          component={KnowYourLiver}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewsPage"
          component={NewsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Article1"
          component={Article1}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Game1"
          component={Game1}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Tab = createBottomTabNavigator();
//put the link that you want to show on the navbar here
const ButtomNavbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
        },
      }}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./app/icon/home-navbar.png')}
                style={[
                  styles.tabicons,
                  {tintColor: focused ? '#3791fc' : '#748c94'},
                ]}
              />
              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? '#3791fc' : '#748c94'},
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="EConsultsLandingPage"
        component={EConsultsLandingPage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./app/icon/econsult-navbar.png')}
                style={[
                  styles.tabicons,
                  {tintColor: focused ? '#3791fc' : '#748c94'},
                ]}
              />
              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? '#3791fc' : '#748c94'},
                ]}>
                E-Consultations
              </Text>
            </View>
          ),
          tabBarStyle: {display: 'none'},
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={HomeStackScreen} //placeholder
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./app/icon/inbox-navbar.png')}
                style={[
                  styles.tabicons,
                  {tintColor: focused ? '#3791fc' : '#748c94'},
                ]}
              />
              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? '#3791fc' : '#748c94'},
                ]}>
                Inbox
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeStackScreen} //placeholder
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./app/icon/profile-navbar.png')}
                style={[
                  styles.tabicons,
                  {tintColor: focused ? '#3791fc' : '#748c94'},
                ]}
              />
              <Text
                style={[
                  styles.tabtext,
                  {color: focused ? '#3791fc' : '#748c94'},
                ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="Appointments"
        component={Appointments}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="NewAppt"
        component={NewAppt}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="HealthRecords"
        component={HealthRecords}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="DietTracking"
        component={DietTracking}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="Caregiver"
        component={Caregiver}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="Bills"
        component={Bills}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="BillsLO"
        component={BillsLO}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="EConsultsLandingPage"
        component={EConsultsLandingPage}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabicons: {
    width: 35,
    height: 35,
    top: 2,
    resizeMode: 'contain',
  },

  tabtext: {
    fontSize: 12,
  },
});
