import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import ApelsinJuice from './ApelsinJuice';
import BananSmoothie from './BananSmoothie';
import Cider from './Cider';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='ApelsinJuice' component={ApelsinJuice} />

        <Stack.Screen name='BananSmoothie' component={BananSmoothie} />

        <Stack.Screen name='Cider' component={Cider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
