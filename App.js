import { NavigationContainer } from '@react-navigation/native';
import { buildWebScreen } from 'react-native-web-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const webScreenConfig = {
  baseURL: 'https://turbo-native-demo.glitch.me',
  routes: {
    Initial: {
      urlPattern: '',
      title: 'Turbo Native Demo',
    },
    Rest: {
      urlPattern: '*',
      title: '',
    },
  },
};

const WebScreen = buildWebScreen(webScreenConfig);

export default function App() {
  return (
    <NavigationContainer linking={WebScreen.linking}>
      <Stack.Navigator>
        <Stack.Screen {...WebScreen.screens.Initial}  />
        <Stack.Screen {...WebScreen.screens.Rest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
