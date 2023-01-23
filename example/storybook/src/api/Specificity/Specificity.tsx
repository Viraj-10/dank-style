import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    'borderRadius': 4,
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'm': 12,
    'backgroundColor': '$red400',
    'padding': '$3',
    ':hover': {
      bg: '$yellow500',
    },
    '@sm': {
      'bg': '$blue400',
      ':hover': {
        bg: '$purple500',
      },
      // platform: {
      //   web: {
      //     style: {
      //       //@ts-ignore
      //       outlineWidth: 0,
      //     },
      //   },
      // },
    },
    'variants': {
      variant: {
        redbox: {
          borderRadius: 12,

          //   style: {
          //     bg: '$pink400',
          //   },
        },
      },
    },
    'defaultProps': {
      // size: 'md',
      variant: 'redbox',
    },
  },
  {}
);

export function Specificity({ ...args }) {
  console.log('hello wr');
  return (
    <Wrapper>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton
          {...args}
          variant="redbox"
          states={{ hover: true }}
          // sx={{ style: { bg: '$amber400' } }}
        >
          <Text>bluebox - sm</Text>
        </StyledButton>
        {/* <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton> */}
      </View>
    </Wrapper>
  );
}
