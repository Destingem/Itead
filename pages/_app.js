import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import DefaultWrapper from "../components/DefaultWrapper/DefaultWrapper"
import createEmotionCache from '../utility/createCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
       <DefaultWrapper>
       <Component {...pageProps} />
       </DefaultWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;