import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Documents</Title>
      <Typography component="p" variant="h4">
        357
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 5 February, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View documents
        </Link>
      </div>
    </React.Fragment>
  );
}