import { FontAwesome } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { TextInput, useColorScheme } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';

import { RootStackParamList } from '../types';

export default function LoadingScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Loading'>) {
  return (
    <View style={styles.container}>
      <FontAwesome
        name={'firefox'}
        size={100}
        style={{ color: '#fff', margin: 20 }}
      />
			<Text style={styles.logoText}>
				ClubHub
			</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#763089',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
	logoText: {
		color: '#fff',
		fontSize: 36,
		fontWeight: 'bold'
	}
});
