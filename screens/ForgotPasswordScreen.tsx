import { FontAwesome } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { BodyText, HeadingText } from '../components/StyledText';
import Button from '../components/Button';

import { RootStackParamList } from '../types';

export default function ForgotPasswordScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'ForgotPassword'>) {
  const [buttonContents, setButtonContents] = React.useState(SendCodeText);
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <HeadingText style={styles.title}>Forgot Password</HeadingText>
        <BodyText>
          We can help you reset your access. Enter your university email address
          and we will send you a security code to verify your access.
        </BodyText>
      </View>
      <View style={styles.inputsWrapper}>
        <View style={styles.field}>
          <BodyText style={styles.inputLabel}>Email Address</BodyText>
          <TextInput style={styles.input} onChangeText={setEmail}>
            {email}
          </TextInput>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => setButtonContents(CodeSentText)}>
          {buttonContents}
        </Button>
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

/**
 * Text to display before user clicks 'Send Code'
 */
const SendCodeText = (
  <BodyText style={styles.buttonText}>
    Send code &nbsp;
    <FontAwesome name={'envelope'} size={18} style={{ color: 'white' }} />
  </BodyText>
);

/**
 * Text to display after user clicks 'Send Code'
 */
const CodeSentText = <BodyText style={styles.buttonText}>Code sent!</BodyText>;
