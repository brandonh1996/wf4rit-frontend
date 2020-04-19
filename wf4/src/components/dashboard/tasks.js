import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, date, project, workflow, task, person, done) {
  return { id, date, project, workflow, task, person, done };
}

const rows = [
  createData(0, '16 Mar, 2020', 'Venture Project', 'A67', 'Approve document', 'Jane Doe', 'No'),
  createData(1, '16 Mar, 2020', 'Administration', 'B56', 'Sign form', 'Jane Doe', 'Yes'),
  createData(2, '16 Mar, 2020', 'Venture Project', 'A67', 'Update settings', 'Jack Example', 'Yes'),
  createData(3, '16 Mar, 2020', 'Finance Documentation', 'C36', 'Contact Jack Example', 'Jane Doe', 'No'),
  createData(4, '15 Mar, 2020', 'Finance Documentation', 'C36', 'Create form', 'Jack Example', 'No'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Tasks() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Tasks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Workflow</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Person</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.project}</TableCell>
              <TableCell>{row.workflow}</TableCell>
              <TableCell>{row.task}</TableCell>
              <TableCell>{row.person}</TableCell>
              <TableCell align="right">{row.done}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more tasks
        </Link>
      </div>
    </React.Fragment>
  );
}