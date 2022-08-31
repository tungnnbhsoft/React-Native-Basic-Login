import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home';
import Login from './screens/Login';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey'
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck'
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'
library.add(fab,faEnvelope, faKey, faCheck, faArrowRightFromBracket )

const Stack = createNativeStackNavigator()
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
        <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerStyle: {
            backgroundColor: '#7715c2',
          },
          headerTitleStyle: {
            color: 'white'
          },
        })}/>
        <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation}) => ({
          headerLeft: () => (<></>),
          headerStyle: {
            backgroundColor: '#7715c2',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerShown: false,
          // headerRight: () => (
          //   <TouchableOpacity 
          //   onPress={() => navigation.pop()}
          //   style={{paddingHorizontal: 10}}>
          //     <Icon name="remove" size={30} color={"white"} />
          //   </TouchableOpacity>
          // ),
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});
