import { FontAwesome } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function ForgotPasswordScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'ForgotPassword'>) {
  const [buttonContents, setButtonContents] = React.useState(SendCodeText);
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text>
          We can help you reset your access. Enter your university email address
          and we will send you a security code to verify your access.
        </Text>
      </View>
      <View style={styles.inputsWrapper}>
        <View style={styles.field}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.input} onChangeText={setEmail}>
            {email}
          </TextInput>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => setButtonContents(CodeSentText)}
          style={styles.button}
        >
          {buttonContents}
        </TouchableOpacity>
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
  forgotPassword: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonWrapper: {
    marginTop: 32,
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
  },
  field: {
    marginVertical: 6,
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

const SendCodeText = (
  <Text style={styles.buttonText}>
    Send code &nbsp;
    <FontAwesome name={'envelope'} size={18} style={{ color: 'white' }} />
  </Text>
);

const CodeSentText = <Text style={styles.buttonText}>Code sent!</Text>;
