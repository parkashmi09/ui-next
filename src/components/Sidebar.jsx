import { Box, Typography } from '@mui/material';

export default function Sidebar({ open }) {
  return (
    <Box
      sx={{
        width: '200px',
        backgroundColor: '#0yuhh00',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: open ? 0 : '-200px', // Position sidebar off-screen when closed
        transition: 'left 0.3s ease',
      }}
    >
    <Typography variant="h6" color="white" component="div">
      Photos
    </Typography>


    </Box>
  );
}
