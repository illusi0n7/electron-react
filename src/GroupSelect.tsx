import FormControl from '@mui/material/FormControl';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './GroupSelect.css';

const GroupSelect = ({ data }: { data: any }) => {
  const [value, setValue] = useState<string>('default');

  return (
    <div className='Group-Select'>
      <div>selected: {value}</div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          defaultValue={value}
          id='grouped-select'
          onChange={(e) => setValue(e.target.value)}>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={'op1'}>Option 1</MenuItem>
          <MenuItem value={'op2'}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={'op3'}>Option 3</MenuItem>
          <MenuItem value={'op4'}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default GroupSelect;
