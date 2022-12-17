import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary500',
        borderRadius: 9999,
        zIndex: 20,
        bottom: 4,
        right: 4,
        position: 'absolute',
        px: 16,
        py: 16,
        flexDirection: 'row',
        alignItems: 'center',
      },
      state: {
        hover: {
          style: { bg: '$primary700' },
        },
        active: {
          style: { bg: '$primary900' },
        },
      },
    },
  },
  {}
);