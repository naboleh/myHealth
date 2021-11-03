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
import {createDrawerNavigator} from '@react-navigation/drawer';

import LandingPage from './app/pages/LandingPage';
import SingpassLogin from './app/pages/SingpassLogin';
import HomePage from './app/pages/HomePage';
import Appointments from './app/pages/Appointments';
import NewAppt from './app/pages/NewAppt';
import Payment from './app/pages/Payment';
import Bills from './app/pages/Bills';
import EConsultBill from './app/pages/EConsultBill';
import BillsLO from './app/pages/BillsLO';
import Caregiver from './app/pages/Caregiver';
import HealthRecords from './app/pages/HealthRecords';
import DietTracking from './app/pages/DietTracking2';
import Profile from './app/pages/Profile';
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
import EConsultCallEnd from './app/pages/EConsultCallEnd';
import KnowYourBodyLanding from './app/pages/KnowYourBodyLanding';
import KnowYourBody from './app/pages/KnowYourBody';
import KnowYourLungs from './app/pages/KnowYourLungs';
import KnowYourLiver from './app/pages/KnowYourLiver';
import NewsPage from './app/pages/NewsPage';
import Article1 from './app/pages/Article1';
import GamesLandingPage from './app/pages/GamesLandingPage';
import GameSnake from './app/games/GameSnake';
import Game2048 from './app/games/Game2048';
import Settings from './app/pages/Settings';

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
          name="DrawerNav"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//put the link that you want to show up on the drawer here
const Drawer = createDrawerNavigator();
function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
        headerShown: false,
        drawerActiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#748c94',
        drawerLabelStyle: {color: '#748c94', fontSize: 15},
      }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

//put the link that you want to show up on the navbar here
const Tab = createBottomTabNavigator();
const ButtomNavbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          height: 60,
        },
      }}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
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
                source={require('./app/icon/econsultnavbar.png')}
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
                E-Consultation
              </Text>
            </View>
          ),
          tabBarStyle: {display: 'none'},
        }}
      />

      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('./app/icon/appt-navbar.jpeg')}
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
                Appointments
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
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

//those pages you want to have bottom bar goes here
const ScreenWithBarStack = createNativeStackNavigator();
function ScreensWithBar() {
  return (
    <ScreenWithBarStack.Navigator>
      <ScreenWithBarStack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="Appointments"
        component={Appointments}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="NewAppt"
        component={NewAppt}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="HealthRecords"
        component={HealthRecords}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="DietTracking"
        component={DietTracking}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="Caregiver"
        component={Caregiver}
        options={{headerShown: false}}
      />
      <ScreenWithBarStack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="Bills"
        component={Bills}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="EConsultBill"
        component={EConsultBill}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="BillsLO"
        component={BillsLO}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="EConsultsLandingPage"
        component={EConsultsLandingPage}
        options={{headerShown: false}}
      />

      <ScreenWithBarStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </ScreenWithBarStack.Navigator>
  );
}

//those pages you want to have drawer goes here
const ScreenWithDrawerStack = createNativeStackNavigator();
function HomeStack() {
  return (
    <ScreenWithDrawerStack.Navigator>
      <ScreenWithDrawerStack.Screen
        name="ButtomNavbar"
        component={ButtomNavbar}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsChat"
        component={EConsultsChat}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsVideo"
        component={EConsultsVideo}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsQnAPainPoints"
        component={EConsultsQnAPainPoints}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsQnASymptoms"
        component={EConsultsQnASymptoms}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsQnAMedication"
        component={EConsultsQnAMedication}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsQnAMedName"
        component={EConsultsQnAMedName}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsQnADrugAllergy"
        component={EConsultsQnADrugAllergy}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsQnADrugName"
        component={EConsultsQnADrugName}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsQnAFever"
        component={EConsultsQnAFever}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="EConsultsWaitingRoom"
        component={EConsultsWaitingRoom}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="KnowYourBody"
        component={KnowYourBody}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="KnowYourBodyLanding"
        component={KnowYourBodyLanding}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="KnowYourLungs"
        component={KnowYourLungs}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="KnowYourLiver"
        component={KnowYourLiver}
        options={{headerShown: false}}
      />
      <ScreenWithDrawerStack.Screen
        name="NewsPage"
        component={NewsPage}
        options={{headerShown: false}}
      />
      <ScreenWithDrawerStack.Screen
        name="Article1"
        component={Article1}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="GamesLandingPage"
        component={GamesLandingPage}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="GameSnake"
        component={GameSnake}
        options={{headerShown: false}}
      />

      <ScreenWithDrawerStack.Screen
        name="Game2048"
        component={Game2048}
        options={{headerShown: false}}
      />
    </ScreenWithDrawerStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabicons: {
    width: 33,
    height: 33,
    top: 10,
    resizeMode: 'contain',
  },
  tabtext: {
    fontSize: 12,
    paddingTop: 8,
    paddingBottom: 10,
  },
});
