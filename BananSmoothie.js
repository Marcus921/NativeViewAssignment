import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BananSmoothie({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>Wow Such Product</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
