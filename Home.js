import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home({navigation}) {

    const fruit = [
        {
            id: '1', fruit: 'ApelsinJuice',
        },
        {   
            id: '2', fruit: 'BananSmoothie',
        },
        {
            id: '3', fruit: 'Cider',
        },
    ];

    const Item = ({fruit}) => (
        <View style={styles.item}>
          <Text style={styles.fruit}>{fruit}</Text>
        </View>
      );


  return (
    <View style={styles.container}>
      <Text>Home Sweet Home</Text>

        <FlatList 
        data={fruit}
        renderItem={({item}) => <Item fruit={item.fruit} />}
        keyExtractor={item => item.id}
        />

      <Button title='ApelsinJuice' onPress={() => {
        navigation.navigate('ApelsinJuice');
      }} />
       <Button title='BananSmoothie' onPress={() => {
        navigation.navigate('BananSmoothie');
      }} />
       <Button title='Cider' onPress={() => {
        navigation.navigate('Cider');
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
  item: {
    backgroundColor: '#2596be',   
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    },
    fruit: {
        fontSize: 15,
        color: '#ffffff',
      },
});
