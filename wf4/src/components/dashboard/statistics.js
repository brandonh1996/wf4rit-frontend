import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';
import WorkIcon from '@material-ui/icons/Work';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Statistics(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">
      {props.number}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {props.date}
      </Typography>
      <div>
      {(() => {
        switch (props.icon) {
          case "workflows":   return <WorkIcon />;
          case "projects": return <AccountTreeIcon />;
          case "forms":  return <DescriptionIcon />;
          case "users":  return <SupervisorAccountIcon />;
          default:      return <WorkIcon />;
        }
      })()}
      </div>
      <div>
        <Link color="primary" href={props.hrefLink} onClick={preventDefault}>
        {props.link}
        </Link>
      </div>
    </React.Fragment>
  );
}