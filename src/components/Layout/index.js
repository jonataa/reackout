import Head from 'next/head';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './style';

export default ({ children, title = 'Reackout Page' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <Normalize />
      <GlobalStyles />
    </Head>

    {children}
  </div>
);
