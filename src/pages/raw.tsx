import React from 'react';
import data from 'data/result.json';

const RawDataPage: React.VFC = () => {
  return <pre>{JSON.stringify(data, null, '\t')}</pre>;
};

export default RawDataPage;
