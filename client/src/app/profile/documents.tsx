import React from 'react';
import { Button, Box } from '@mui/material';

const Documents: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <h2>Documents</h2>
      <Box>
        <h3>Pitch Deck</h3>
        <Button variant="contained" color="primary">Upload Pitch Deck</Button>
      </Box>
      <Box>
        <h3>Other Documents</h3>
        <Button variant="contained" color="primary">Upload Other Document</Button>
      </Box>
    </Box>
  );
};

export default Documents;