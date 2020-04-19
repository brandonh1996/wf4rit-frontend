import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import { FormBuilder } from 'cb-react-forms';
//import { FormGenerator } from 'cb-react-forms';
//import VerticalLinearStepper from './stepper';
import WorkflowsTable from './workflowsTable';

const items = [
  {
    key: "Label",
    name: "Label",
    icon: "fa fa-font"
  },
  {
    key: "LineBreak",
    name: "Line Break",
    icon: "fa fa-arrows-h"
  },
  {
    key: "Dropdown",
    name: "Dropdown",
    icon: "fa fa-caret-square-o-down"
  },
  {
    key: "Checkboxes",
    name: "Checkboxes",
    icon: "fa fa-check-square-o"
  },
  {
    key: "TextInput",
    name: "Text Input",
    icon: "fa fa-font"
  },
  {
    key: "NumberInput",
    name: "Number Input",
    icon: "fa fa-plus"
  },
  {
    key: "TextArea",
    name: "Multi-line Input",
    icon: "fa fa-text-height"
  },
  {
    key: "HyperLink",
    name: "Web site",
    icon: "fa fa-link"
  },
  {
    key: "Email",
    name: "Email",
    icon: "fa fa-at"
  },
  {
    key: "Date",
    name: "Date",
    icon: "fa fa-calendar"
  },
  {
    key: "Signature",
    name: "Signature",
    icon: "fa fa-edit"
  }
];
 
const onSubmit = (formData) => console.log(formData);

const Example = props => (
  <FormBuilder 
    onSubmit={onSubmit}  // function
    items={items}     // array of toolbar items
  />
);

/**
const ExampleGenerate = props => (
  <FormGenerator 
    formData={[{"id":"c2edc71d-f006-449d-a097-f1a5e7c9fa7f","element":"Header","label":{"blocks":[{"key":"59a94","text":"Test 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}},{"id":"b0174909-8399-4b44-b9a8-dc32dc47571b","element":"Label","label":{"blocks":[{"key":"f8q7a","text":"Test 2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}},{"id":"cda08e7d-c371-4a3b-b97f-848d040f756c","element":"Paragraph","label":{"blocks":[{"key":"ccvdm","text":"Test 3","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}},{"id":"fa9f578a-7c5f-4f04-9f36-868d87c92ec9","element":"Dropdown","label":{"blocks":[{"key":"83m03","text":"Placeholder Label","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}},"required":false,"options":[{"id":"1c8b5c8d-d70d-43be-8f6d-7f20f78a4e60","value":"Option1"},{"id":"7fd52aa8-8e48-4575-9e16-1f80a675e781","value":"Option2"}]}]}     // JSON data from 
    onSubmit={onSubmit}     // function
    readOnly={true}     // boolean
    //responseData={} // answers data to pre-fill the form
  />
);
*/

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function WorkflowTable() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //var FormBuilder = require('react-form-builder2');

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <WorkflowsTable />
      </Paper>
      <Button onClick={handleOpen} variant="contained" color="primary" style={{ backgroundColor: '#F76902' }}>
          Create New Workflow
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        style={{overflow:'scroll'}}
      >
        <div style={{position: 'absolute', top: '5%', left: '35%', width: '800px', maxHeight: '300%', backgroundColor: 'white'}} className={classes.paper}>
        <Example />
        </div>
      </Modal>
    </div>
  );
}
