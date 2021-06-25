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
      <FontAwesome
        name={'firefox'}
        size={100}
        style={{ color: '#763089', margin: 20 }}
      />
      <View style={styles.inputsWrapper}>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input}></TextInput>
          <View style={styles.forgotPassword}>
            <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
              <Text style={styles.forgotPasswordMessage}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => navigation.push('ForgotPassword')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Login &nbsp;
              <FontAwesome
                name={'sign-in'}
                size={18}
                style={{ color: 'white' }}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    alignItems: 'flex-end',
  },
  forgotPasswordMessage: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  buttonWrapper: {
    marginVertical: 16,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#763089',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  inputsWrapper: {
    width: '80%',
    marginVertical: 40,
  },
  field: {
    marginVertical: 16,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#763089',
    padding: 8,
    marginVertical: 4,
  },
});
