import React from 'react';

import { View } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
const StyledPlatformProps = styled(
  View,
  {
    h: '$40',
    w: '$40',
    web: {
      bg: '$red500',
    },
    android: {
      bg: '$green500',
    },
    ios: {
      bg: '$blue500',
    },
  },
  {}
);

export function PlatformBasedStyles({ ...args }) {
  return (
    <Wrapper>
      <StyledPlatformProps {...args}></StyledPlatformProps>
    </Wrapper>
  );
}
