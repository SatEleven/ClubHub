import { JSXElement } from '@babel/types';
import * as React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface Props {
  children?: JSX.Element | JSX.Element[];
  onPress?: (event: GestureResponderEvent) => void;
}

/**
 * Custom styled Button component for ClubHub
 */
export default function Button(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#763089',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
