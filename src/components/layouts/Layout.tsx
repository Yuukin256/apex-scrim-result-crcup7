/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import FabToTop from 'components/atoms/FabToTop';
import './Layout.css';

const Layout: React.VFC<{ children: React.ReactNode }> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#DF1818',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title ?? `Title`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.45rem`,
        }}
      >
        <FabToTop />
        <main>{children}</main>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
