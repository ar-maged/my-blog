import { useTheme } from '../hooks/useTheme';
import { styled } from '../stitches.config';

export const Footer = () => {
  const { isDark } = useTheme();

  const theme = isDark ? undefined : 'light';

  return (
    <Container>
      <Text theme={theme}>
        Made with <Bracket theme={theme}>{'<'}</Bracket>
        Love
        <Bracket theme={theme}>{'/> '}</Bracket>
        && <Bracket theme={theme}>{'<'}</Bracket>Coffee
        <Bracket theme={theme}>{'/>'}</Bracket>
      </Text>
    </Container>
  );
};

const Container = styled('footer', {
  position: 'absolute',
  bottom: 16,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
});

const Text = styled('span', {
  color: 'rgba(221, 221, 221, 0.67)',
  fontSize: 12,
  variants: {
    theme: {
      light: {
        color: 'rgba(60, 60, 60, 0.67)',
      },
    },
  },
});

const Bracket = styled('span', {
  color: 'rgba(221, 221, 221, 0.32)',
  variants: {
    theme: {
      light: {
        color: 'rgba(106, 106, 106, 0.38)',
      },
    },
  },
});
