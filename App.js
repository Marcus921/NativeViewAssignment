import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import SecondView from './SecondView';
import ThirdView from './ThirdView';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='SecondView' component={SecondView} />

        <Stack.Screen name='ThirdView' component={ThirdView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
