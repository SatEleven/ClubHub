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

export function BodyText(props: TextProps) {
  return (
    <StyledText {...props} style={[props.style, { fontFamily: 'roboto' }]} />
  );
}

export function HeaderText(props: TextProps) {
  return (
    <StyledText {...props} style={[props.style, { fontFamily: 'lato' }]} />
  );
}
