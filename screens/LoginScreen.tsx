import { FontAwesome } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { TextInput, useColorScheme } from 'react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BodyText, HeadingText } from '../components/StyledText';
import Button from '../components/Button';

import { RootStackParamList } from '../types';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
  const colorScheme = useColorScheme();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <FontAwesome
        name={'firefox'}
        size={100}
        style={{ color: '#763089', margin: 20 }}
      />
      <View style={styles.inputsWrapper}>
        <View style={styles.field}>
          <BodyText style={styles.inputLabel}>Email Address</BodyText>
          <TextInput style={styles.input} onChangeText={setEmail}>
            {email}
          </TextInput>
        </View>
        <View style={styles.field}>
          <BodyText style={styles.inputLabel}>Password</BodyText>
          <TextInput style={styles.input} onChangeText={setPassword}>
            {password}
          </TextInput>
          <View style={styles.forgotPassword}>
            <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
              <BodyText style={styles.forgotPasswordMessage}>
                Forgot your password?
              </BodyText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => console.log('LOG IN')}
          >
            <BodyText style={styles.buttonText}>
              Log in &nbsp;
              <FontAwesome
                name={'sign-in'}
                size={18}
                style={{ color: 'white' }}
              />
            </BodyText>
          </Button>
          <View style={styles.register}>
            <TouchableOpacity onPress={() => navigation.push('Register')}>
              <BodyText style={styles.registerLink}>
                Don't have an account yet? Register
              </BodyText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Loading')}>
              <BodyText style={styles.registerLink}>
                DEBUG: LOADING
              </BodyText>
            </TouchableOpacity>
          </View>
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
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  register: {
    marginTop: 24,
  },
  registerLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
