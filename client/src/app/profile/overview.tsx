import React from 'react';
import { TextField, MenuItem, Box } from '@mui/material';

const Overview: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <h2>Company Overview</h2>
      <form>
        <TextField label="Title" fullWidth margin="normal" variant="outlined" />
        <TextField label="Founding Year" fullWidth margin="normal" variant="outlined" />
        <TextField label="Website URL" fullWidth margin="normal" variant="outlined" />
        <TextField label="Country" select fullWidth margin="normal" variant="outlined">
          <MenuItem value="Country1">Country1</MenuItem>
          <MenuItem value="Country2">Country2</MenuItem>
        </TextField>
        <TextField label="City" fullWidth margin="normal" variant="outlined" />
        <TextField label="Business Type" fullWidth margin="normal" variant="outlined" />
        <TextField label="Product Type" select fullWidth margin="normal" variant="outlined">
          <MenuItem value="ProductType1">ProductType1</MenuItem>
          <MenuItem value="ProductType2">ProductType2</MenuItem>
        </TextField>
        <TextField label="Annual Revenue" fullWidth margin="normal" variant="outlined" />
        <TextField label="MRR" fullWidth margin="normal" variant="outlined" />
        <TextField label="Company Stage" select fullWidth margin="normal" variant="outlined">
          <MenuItem value="Stage1">Stage1</MenuItem>
          <MenuItem value="Stage2">Stage2</MenuItem>
        </TextField>
        <TextField label="Number of Employees" fullWidth margin="normal" variant="outlined" />
        <TextField label="LinkedIn URL" fullWidth margin="normal" variant="outlined" />
        <TextField label="Facebook URL" fullWidth margin="normal" variant="outlined" />
        <TextField label="Twitter URL" fullWidth margin="normal" variant="outlined" />
      </form>
    </Box>
  );
};

export default Overview;