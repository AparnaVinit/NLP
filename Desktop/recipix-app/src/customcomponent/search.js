import React from 'react';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Search =(({classes, onChange }) => {
  return (
    <TextField
      label="Enter Your Ingredients"
      variant="outlined"
      onF
      InputProps={{startAdornment:<InputAdornment position='end'><SearchIcon/></InputAdornment> }}
      sx={{fieldset:{borderColor:'green'}}}
      onChange={onChange}
      fullWidth
    />
  );
});

export default Search;
