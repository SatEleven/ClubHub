import { FontAwesome } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { TextInput, useColorScheme } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <FontAwesome name={'firefox'} size={100} style={{color: "#763089", margin: 20}}/>
      <View style={styles.inputsWrapper}>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  forgotPassword: {
    fontSize: 18,
    textAlign:"right",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  inputsWrapper: {
    width: "80%",
  },
  field: {
    marginVertical: 6,
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#763089",
    padding: 8,
    marginVertical: 4,
  }
});
