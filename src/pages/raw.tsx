import React from 'react';
import Layout from 'components/layouts/layout';
import Seo from 'components/layouts/seo';
import result from 'data/result.json';
import team from 'data/team.json';

const RawDataPage: React.VFC = () => {
  const preStyle: React.CSSProperties = {
    fontSize: '0.8rem',
  };
  return (
    <Layout>
      <Seo title="Home" />
      <h2>team.json</h2>
      <a href="https://raw.githubusercontent.com/Yuukin256/apex-scrim-result-crcup7/main/src/data/team.json">GitHub</a>
      <pre style={preStyle}>{JSON.stringify(team, null, '  ')}</pre>
      <h2>result.json</h2>
      <a href="https://raw.githubusercontent.com/Yuukin256/apex-scrim-result-crcup7/main/src/data/result.json">
        GitHub
      </a>
      <pre style={preStyle}>{JSON.stringify(result, null, '  ')}</pre>
    </Layout>
  );
};

export default RawDataPage;
