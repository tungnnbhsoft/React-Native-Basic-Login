import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home';
import Login from './screens/Login';
import TodoHome from './screens/TodoHome';
import TodoCreate from './screens/TodoCreate';
import TodoDetails from './screens/TodoDetails';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons/'
import { faArrowLeft,faPlus, faArrowRightFromBracket, faCheck, faKey,faClipboard, faHeading, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faEnvelope, faKey, faCheck, faArrowRightFromBracket, faArrowLeft, faPlus, faClipboard, faHeading, faSquare, faSquareCheck, faTrash )

const Stack = createNativeStackNavigator()
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerStyle: {
            backgroundColor: '#ff8000',
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
            backgroundColor: '#ff8000',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerShown: false,
        })}/>
        <Stack.Screen
        name="Todo App"
        component={TodoHome}
        options={({ navigation}) => ({
          headerRight: () => (<></>),
          headerStyle: {
            backgroundColor: '#ff8000',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerLeft: () => (
            <TouchableOpacity 
            onPress={() => navigation.pop()}
            style={{paddingHorizontal: 10}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" size={25} color="white" />
            </TouchableOpacity>
          ),
        })}/>
        <Stack.Screen
        name="TodoCreate"
        component={TodoCreate}
        options={({ navigation}) => ({
          headerRight: () => (<></>),
          headerStyle: {
            backgroundColor: '#ff8000',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerLeft: () => (
            <TouchableOpacity 
            onPress={() => navigation.pop()}
            style={{paddingHorizontal: 10}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" size={25} color="white" />
            </TouchableOpacity>
          ),
        })}/>
        <Stack.Screen
        name="TodoDetails"
        component={TodoDetails}
        options={({ navigation}) => ({
          headerRight: () => (<></>),
          headerStyle: {
            backgroundColor: '#ff8000',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerLeft: () => (
            <TouchableOpacity 
            onPress={() => navigation.pop()}
            style={{paddingHorizontal: 10}}>
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" size={25} color="white" />
            </TouchableOpacity>
          ),
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});
