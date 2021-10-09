/*
Stack navigator to move between the pages
1. import the page in here (e.g. import HomePage from './src/pages/HomePage';)
2. enter it as a stack.screen
3. in the page, the touchableopacity/button should have an action (e.g. onPress={() => navigation.navigate('HomePage')}>)
*/
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import ChatFragment from './app/pages/ChatFragment';

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
          name="HomePage" 
          component={HomePage} 
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Appointments" 
          component={Appointments} 
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="NewAppt" 
          component={NewAppt} 
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HealthRecords"
          component={HealthRecords}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DietTracking"
          component={DietTracking}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Caregiver"
          component={Caregiver}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Bills" 
          component={Bills} 
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="BillsLO" 
          component={BillsLO} 
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="ChatFragment" 
          component={ChatFragment} 
          options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};