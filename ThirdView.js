import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ThirdView({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.fruit}>CIDER</Text>
      <Button title='Home' onPress={() => {
        navigation.navigate('Home');
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2596be',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fruit: {
    fontSize: 40,
    color: '#ffffff',
    },
});