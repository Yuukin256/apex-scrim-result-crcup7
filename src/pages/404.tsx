import React from 'react';
import Layout from 'components/layouts/Layout';
import Seo from 'components/layouts/Seo';

const NotFoundPage: React.VFC = () => (
  <Layout>
    <Seo title="404 Not found" />
    <h1>404 Not Found</h1>
    <p>おっと、存在しないページにアクセスしたようです。</p>
  </Layout>
);

export default NotFoundPage;
