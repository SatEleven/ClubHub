import { FontAwesome } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';

import { RootStackParamList } from '../types';

export default function RegisterScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Register'>) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
	const [confirmedPassword, setConfirmedPassword] = React.useState('');

  return (
    <View style={styles.container}>
			<View style={styles.titleWrapper}>
        <Text style={styles.title}>Register</Text>
      </View>
      <View style={styles.inputsWrapper}>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.input} onChangeText={setEmail}>
            {email}
          </TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} onChangeText={setPassword}>
            {password}
          </TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput style={styles.input} onChangeText={setConfirmedPassword}>
						{confirmedPassword}
          </TextInput>
        </View>
        <View style={styles.buttonWrapper}>
					<Button
						onPress={() => navigation.push('ForgotPassword')}
					>
            <Text style={styles.buttonText}>
              Register &nbsp;
              <FontAwesome
                name={'sign-in'}
                size={18}
                style={{ color: 'white' }}
              />
            </Text>
					</Button>
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
	titleWrapper: {
    margin: 32,
    marginBottom: 64,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  inputsWrapper: {
    width: '80%',
    marginVertical: 10,
  },
  field: {
    marginVertical: 10,
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
  register: {
		width: "100%",
    marginTop: 12,
  },
  registerLink: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
