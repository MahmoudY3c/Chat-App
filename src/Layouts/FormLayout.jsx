import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import Form from '../Components/impure/Form';

function FormLayout(props) {
  const LoginItem = (props) => (
    <ListItem>
      <Button>
        <ListItemAvatar>
          <Avatar alt={props.alt} src={props.image} />
        </ListItemAvatar>
        <ListItemText secondary={props.title} />
      </Button>
    </ListItem>
  )
  return (
    <div>
      <Card variant="outlined" sx={{ margin: 4 }}>
        <CardContent>
          <Stack sx={{ margin: 2 }} justifyContent="center" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={require("../Images/email.png")}
              sx={{ width: 125, height: 125 }}
            />
          </Stack>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h3" component="h2" color="#000" sx={{ margin: 5, textAlign: 'center' }}>
              {props.title}
            </Typography>
          </Box>
          <Box>
            <Form data={props.FormData}/>
          </Box>
          <Stack justifyContent="center" alignItems="center">
            <List>
              {props.auth && props.auth.map((e, i) => <LoginItem key={i} image={e.image ? require('../Images/'+e.image) : null} title={e.title} alt={props.alt} />
              )}
            </List>
          </Stack>
        </CardContent>
      </Card>
    </div >
  );
}

export default FormLayout;