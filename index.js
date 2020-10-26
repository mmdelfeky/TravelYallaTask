/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {I18nManager} from 'react-native';
import 'react-native-gesture-handler';

I18nManager.allowRTL(false);

AppRegistry.registerComponent(appName, () => App);
