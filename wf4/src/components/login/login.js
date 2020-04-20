import React, { useState } from 'react';
import { Redirect } from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.rit.edu/research/incubator/" target="_blank">
        Venture Creations
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fireRedirect, setFireRedirect] = useState(false);
  const [open, setOpen] = React.useState(false);
  
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  let handleSubmit = (e) => {
    if(username === "" || password === "") {
      return
    }

    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  
    const url = "https://iste501b.rit.edu/api/login.php"
    axios.post(
      url,
      {username, password},
      config,
    ).then(response => {
      if (response.status === 200){
        if (!response.data.includes('"message":"Login failed."')) {
          var removeFirst = response.data.split('"jwt":').pop().substring(1);
          var token = removeFirst.substring(0, removeFirst.length - 2);
          localStorage.setItem('token', token); 
          setFireRedirect(true);
        } else {
          setOpen(true);
        }
      }
    }).catch(function (error) {
      setOpen(true);
    });
  };
  
  let onChangeUsername = (e) => {
    const value = e.currentTarget.value;
    setUsername(value);
  }

  let onChangePassword = (e) => {
    const value = e.currentTarget.value;
    setPassword(value);
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Login failed!
        </Alert>
      </Snackbar>
      </div>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="VC" style={{ color: '#F76902', width: '400px', height: 'auto', borderRadius: '0%', paddingBottom: '30px' }} src="https://venturecreations.com//wp-content/uploads/2019/04/Tagline_Logo.png" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeUsername}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangePassword}
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: '#F76902' }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
        {fireRedirect && (
          <Redirect to={'/dashboard'}/>
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}