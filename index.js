import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('mobileApp', () => App);

if (Platform.OS === 'web') {
    AppRegistry.runApplication('mobileApp', { rootTag: document.getElementById('react-root') });
}

export default App;
