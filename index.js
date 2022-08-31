import {decode, encode} from 'base-64'

if (!global.btoa) {
global.btoa = encode;
}

if (!global.atob) {
global.atob = decode;
}
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './app/store';

AppRegistry.registerComponent(appName, () => Index);
export default Index = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)