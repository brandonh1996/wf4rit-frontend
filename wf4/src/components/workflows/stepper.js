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

var selectedDate = new Date('2020-08-18T21:11:54')

const handleDateChange = (date) => {
    selectedDate = date;
};

var steps = [{name: <Input required placeholder="Step name..."></Input>, description: <Input fullWidth multiline placeholder="Step description..."></Input>, 
person: 
<div style={{marginTop: '20px'}}>
<InputLabel>Asignee</InputLabel>  
<Select
style={{minWidth: '120px'}}
labelId="demo-simple-select-label"
id="demo-simple-select"
value="Jack"
>      
<MenuItem value='Jack'>Jack Example</MenuItem>
<MenuItem value='Jane'>Jane Doe</MenuItem>
</Select>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
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
          id="date-picker-inline"
          label="End Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
</div>}, {name: <Input placeholder="Step name..."></Input>, description: <Input fullWidth multiline placeholder="Step description..."></Input>, person: <Select
style={{minWidth: '120px'}}
placeholder="Choose asignee..."
labelId="demo-simple-select-label"
id="demo-simple-select"
>
<MenuItem value={'Jack'}>Jack Example</MenuItem>
<MenuItem value={'Jane'}>Jane Doe</MenuItem>
</Select>}];

function getSteps() {
  let stepNames = [];

  steps.forEach(element => {
    stepNames.push(element.name)
  });  

  return stepNames;
}

function addStep() {
  let defaultStep = {name: <Input required placeholder="Step name..."></Input>, description: <Input fullWidth multiline placeholder="Step description..."></Input>, 
  person: 
  <div style={{marginTop: '20px'}}>
  <InputLabel>Asignee</InputLabel>  
  <Select
  style={{minWidth: '120px'}}
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value="Jack"
  >      
  <MenuItem value='Jack'>Jack Example</MenuItem>
  <MenuItem value='Jane'>Jane Doe</MenuItem>
  </Select>
  </div>}  
  steps.push(defaultStep);
}

function removeStep() {
    steps.pop();
  }

function getStepContent(step) {
    return steps[step].description
}

function getStepPerson(step) {
    return steps[step].person
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  //const [steps, setSteps] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  var steps = getSteps();

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
    addStep()
    handleNext();
  };

  const handleRemove = () => {
    if(steps.length !== 1) {
        removeStep()
        handleBack();
    }
  };

  return (
    <div className={classes.root}>
      <Input required style={{margin: '24px'}} placeholder="Workflow name"></Input>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography component={'span'}>{getStepContent(index)}</Typography>
              <Typography component={'span'}>{getStepPerson(index)}</Typography>
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
