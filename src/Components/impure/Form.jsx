import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/TextField';
import { Stack, Button, Box } from '@mui/material';

function Form(props) {
  return (
    <form>
      <Stack spacing={2}>
        {
          props.data &&
          props.data.map(e =>
            e.inputs ?
            e.inputs.map((a, i) =>
              <TextField {...a} key={i} />
            ) :
            e.buttons ?
            e.buttons.map((a, i) =>
              <Button {...a} key={i}>{a.text}</Button>
            ) :
            null
          )
        }
      </Stack>
    </form>
  );
}

export default Form;