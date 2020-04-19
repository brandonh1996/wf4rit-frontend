import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function VerticalLinearStepper() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const [activeStep, setActiveStep] = React.useState(0);

  const [name, setName] = React.useState('Jack');

  const [id, setId] = React.useState(0);

  const updateSteps = (event) => {
    console.log(event.target.value);
    const elementsIndex = steps.findIndex(element => element.id == id );

    let newArray = [...steps];

    //newArray[elementsIndex].name.props.value = event.target.value;

    newArray[elementsIndex] = {...newArray[elementsIndex], name: event.target.value}

    setSteps(newArray);
  }

  const handleIdIncrease = () => {
    console.log(id);
    setId((prevId) => prevId + 1);
  };

  const handleIdDecrease = () => {
    console.log(id);
    setId((prevId) => prevId - 1);
  };

  const handleNameChange = (event) => {
    console.log(name);
    setName(event.target.value);
  };

  const [stepName, setStepName] = React.useState('');

  const handleStepNameChange = (event) => {
    console.log(stepName);
    setStepName(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleAdd = () => {
        handleIdIncrease();
        addStep()
        handleNext()
  };

  const handleRemove = () => {
    if(steps.length !== 1) {
        handleIdDecrease();
        handleBack()
        removeStep()
    }
  };

  const [steps, setSteps] = React.useState([{
  id: id,  
  name: <Input onChange={updateSteps} value={'Step ' + (id + 1)} placeholder="Step name..."></Input>, 
  description: <Input fullWidth multiline placeholder="Step description..."></Input>, 
  person: 
  <div style={{marginTop: '20px'}}>
  <InputLabel>Assignee</InputLabel>  
  <Select
  style={{minWidth: '120px'}}
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={name}
  onChange={handleNameChange}
  >      
  <MenuItem value='Jack'>Jack Example</MenuItem>
  <MenuItem value='Jane'>Jane Doe</MenuItem>
  </Select>
  </div>, 
  date:   
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="startDate"
        label="Start Date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="endDate"
        label="End Date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </Grid>
  </MuiPickersUtilsProvider>}]);

  var beginSteps = [{
    id: id,  
    name: <Input onChange={updateSteps} value={'Step ' + (id + 1)} placeholder="Step name..."></Input>, 
    description: <Input fullWidth multiline placeholder="Step description..."></Input>, 
    person: 
    <div style={{marginTop: '20px'}}>
    <InputLabel>Assignee</InputLabel>  
    <Select
    style={{minWidth: '120px'}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={name}
    onChange={handleNameChange}
    >      
    <MenuItem value='Jack'>Jack Example</MenuItem>
    <MenuItem value='Jane'>Jane Doe</MenuItem>
    </Select>
    </div>, 
    date:   
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="startDate"
          label="Start Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="endDate"
          label="End Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>}]

function addStep() {
  let defaultStep = {
  id: id,  
  name: <Input required placeholder="Step name..."></Input>, 
  description: <Input fullWidth multiline placeholder="Step description..."></Input>, 
  person: 
  <div style={{marginTop: '20px'}}>
  <InputLabel>Assignee</InputLabel>  
  <Select
  style={{minWidth: '120px'}}
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={name}
  onChange={handleNameChange}
  >      
  <MenuItem value='Jack'>Jack Example</MenuItem>
  <MenuItem value='Jane'>Jane Doe</MenuItem>
  </Select>
  </div>,
  date:   
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="startDate"
        label="Start Date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="endDate"
        label="End Date"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </Grid>
  </MuiPickersUtilsProvider>};
  
  let newSteps = steps;

  newSteps.push(defaultStep);

  setSteps(newSteps);
}

  function removeStep() {
    let newSteps = steps;

    newSteps.pop();

    setSteps(newSteps);
    }

  return (
    <div className={classes.root}>
      <Input style={{margin: '24px'}} placeholder="Workflow name"></Input>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.name}</StepLabel>
            <StepContent>
              <Typography component={'span'}>{step.description}</Typography>
              <Typography component={'span'}>{step.person}</Typography>
              <Typography component={'span'}>{step.date}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Button style={{marginLeft: '32px'}} onClick={handleAdd} className={classes.button}>
            Add Step
      </Button>
      <Button style={{marginLeft: '32px'}} onClick={handleRemove} className={classes.button}>
            Remove Step
      </Button>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps are assigned - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
