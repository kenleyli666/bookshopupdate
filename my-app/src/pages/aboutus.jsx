import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Importimg from './components/importimg';
import '../../app/globals.css';

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/detail">
      Detail
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Carts
    </Typography>,
  ];

  return (
    <>
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        // className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>

    <Importimg />

    </>
  );
}
