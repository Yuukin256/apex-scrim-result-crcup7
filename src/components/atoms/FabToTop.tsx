import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import React from 'react';

const FabToTop: React.VFC = () => (
  <Fab variant="extended" color="primary" href="#top" style={{ position: 'fixed', bottom: 10, right: 10 }}>
    <UpIcon />
    トップに戻る
  </Fab>
);

export default FabToTop;
