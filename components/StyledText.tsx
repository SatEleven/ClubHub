import * as React from 'react';

import { Text as StyledText, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return (
    <StyledText
      {...props}
      style={[props.style, { fontFamily: 'space-mono' }]}
    />
  );
}

/**
 * Body text node, wraps the default `Text`, use either this or
 * `HeadingText` instead of React Native's default `Text` for consistent
 * styling. Accepts additional props to pass down (like inheritance in CSS).
 * @see https://medium.com/@fullsour/style-inheritance-of-react-native-eca1c974f02b
 */
export function BodyText(props: TextProps) {
  return (
    <StyledText {...props} style={[props.style, { fontFamily: 'roboto' }]} />
  );
}

/**
 * Heading text node, wraps the default `Text`, use either this or
 * `BodyText` instead of React Native's default `Text` for consistent
 * styling. Accepts additional props to pass down (like inheritance in CSS).
 * @see https://medium.com/@fullsour/style-inheritance-of-react-native-eca1c974f02b
 */
export function HeadingText(props: TextProps) {
  return (
    <StyledText {...props} style={[props.style, { fontFamily: 'lato' }]} />
  );
}
