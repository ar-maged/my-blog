import { Button } from '../components/Button';
import Layout from '../components/Layout';
import { ThemeContext } from '../hooks/useTheme';
import { styled } from '../stitches.config';

const IndexPage = () => (
  <Layout title="Welcome to my blog">
    <ThemeContext.Consumer>
      {({ toggle, isDark }) => {
        const theme = isDark ? undefined : 'light';
        return (
          <Container>
            <Wrapper>
              <Title>
                <HeaderBracket theme={theme}>{'<'}</HeaderBracket>
                AhmedElhanafy
              </Title>
              <Button color="primary" onClick={toggle}>
                blog
              </Button>
              <Button color="violet">library</Button>
              <Button color="pink">projects</Button>
              <Button>
                worksAt
                <ButtonBracket theme={theme}>{'={'}</ButtonBracket>
                <MsLogo
                  src="https://pngimg.com/uploads/microsoft/microsoft_PNG13.png"
                  alt="Microsoft Logo"
                />
                <ButtonBracket theme={theme}>{'}'}</ButtonBracket>
              </Button>
              <Button>
                social
                <ButtonBracket theme={theme}>{'=['}</ButtonBracket>
                <ButtonBracket theme={theme}>{']'}</ButtonBracket>
              </Button>
              <HeaderBracket theme={theme}>{'/>'}</HeaderBracket>
            </Wrapper>
          </Container>
        );
      }}
    </ThemeContext.Consumer>
  </Layout>
);

const Container = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'start',
  margin: '0 auto',
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const Title = styled('h1', {
  margin: 0,
  fontWeight: 'bold',
  fontSize: 56,
  color: '$textColor',
});

const ButtonBracket = styled('span', {
  color: 'rgba(230, 230, 230, 0.3)',
  variants: {
    theme: {
      light: {
        color: 'rgba(33, 33, 33, 0.44)',
      },
    },
  },
});

const HeaderBracket = styled('span', {
  fontSize: 34,
  fontWeight: 'bold',
  color: 'rgba(255, 255, 255, 0.48)',
  variants: {
    theme: {
      light: {
        color: 'rgba(53, 53, 53, 0.5)',
      },
    },
  },
});

const MsLogo = styled('img', {
  width: 20,
  height: 20,
  marginBottom: -3,
});

export default IndexPage;
