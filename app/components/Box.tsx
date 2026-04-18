import { styled } from 'styled-system/jsx';

export const Box = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Row = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Column = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Box;
