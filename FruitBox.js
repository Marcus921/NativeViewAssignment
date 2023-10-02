import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function FruitBox(props) {

  return (
    <View style={textstyles.redBox}>
      <Text style={textstyles.text}>{props.frukt.fruit}</Text>
    </View>
  );
}

const textstyles = StyleSheet.create({
    redBox: {
      flex: 1,
      backgroundColor: '#2596be',
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 100,
      marginTop: 5,
    },
    text: {
        color: '#ffffff',
    },
  });
