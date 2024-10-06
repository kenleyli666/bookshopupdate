// import React from 'react';
// import { Breadcrumbs, Link, Typography, Stack } from '@mui/material';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import '../../app/globals.css';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// export default function CustomSeparator() {
//   const breadcrumbs = [
//     <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
//       MUI
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       href="/material-ui/getting-started/installation/"
//       onClick={handleClick}
//     >
//       Core
//     </Link>,
//     <Typography key="3" sx={{ color: 'text.primary' }}>
//       Breadcrumb
//     </Typography>,
//   ];

//   return (
//     <>
//     <Stack spacing={2}>

//       <Breadcrumbs
//         separator={<NavigateNextIcon fontSize="small" />}
//         aria-label="breadcrumb"
//       >
//         {breadcrumbs}
//       </Breadcrumbs>
//     </Stack>
//     </>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppProvider } from '@toolpad/core';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

function DashboardLayoutBasic() {
  return (
    <AppProvider>
      <DashboardLayout>
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography>Dashboard content</Typography>
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutBasic;

