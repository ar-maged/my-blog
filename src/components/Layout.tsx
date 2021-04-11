import { ThemeContext } from '../hooks/useTheme';
import { lightTheme, styled } from '../stitches.config';
import { Footer } from './Footer';
import { IconsBackground } from './IconsBackground';
import Head from 'next/head';
import React, { createContext, ReactNode, useContext } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [isDark, setIsDark] = React.useState(true);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggle: () => setIsDark((state) => !state) }}
    >
      <ThemeContext.Consumer>
        {({ isDark }) => (
          <Container className={isDark ? '' : lightTheme.toString()}>
            <Head>
              <title>{title}</title>
            </Head>
            <Background />
            <IconsBackground />
            {children}
            <Footer />
          </Container>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
});

const Background = styled('div', {
  absoluteFill: 0,
  zIndex: -1,
  backgroundColor: '$background',
  backgroundImage: '$backgroundShapes',
});

export default Layout;
