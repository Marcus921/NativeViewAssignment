import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {Drinks: 'Orange Juice'},
                    {Drinks: 'Banana Smoothie'},
                    {Drinks: 'Cider'},
                ]}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SecondView');
                }}>
                    <Text>{item.Drinks}</Text>
                </TouchableOpacity>
            )}/>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
