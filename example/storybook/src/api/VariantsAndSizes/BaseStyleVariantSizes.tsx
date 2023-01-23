import React from 'react';
import { View, Text } from 'react-native';
import { styled, verboseStyled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    m: '$3',
    variants: {
      variant: {
        redbox: {
          'bg': '$red400',
          'px': '$4',
          'py': '$3',
          ':hover': {
            bg: '$amber500',
          },
        },
      },
      size: {
        sm: {
          px: '$4',
          py: '$3',
        },
        md: {
          px: '$5',
          py: '$4',
        },
      },
    },
    compoundVariants: [
      {
        variant: 'redbox',
        size: 'sm',
        value: {
          'borderWidth': 2,
          ':hover': {
            bg: '$blue400',
          },
        },
      },
      {
        variant: 'redbox',
        size: 'md',
        value: {
          borderWidth: 2,
          borderColor: '$amber200',
          bg: '$amber400',
        },
      },
    ],

    defaultProps: {
      size: 'md',
      variant: 'redbox',
    },
  },
  {}
);

export function BaseStyleVariantSizes({ ...args }) {
  return (
    <Wrapper>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton size="md" {...args} states={{ hover: true }}>
          <Text>bluebox - sm</Text>
        </StyledButton>

        <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton>
      </View>
    </Wrapper>
  );
}
