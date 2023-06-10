import React from 'react';
import { AppHeader } from '../../Styles/defaults/App';
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { css, jsx } from '@emotion/react';

function index(props) {
  return (
    <>
      <main>
        <nav>

        </nav>
        <header css={AppHeader}>
          <Typography variant="h3" component="h2" color="#000" sx={{ margin: 5, textAlign: 'center' }}>
            Main Page
          </Typography>
        </header>
      </main>
    </>
  );
}

export default index;