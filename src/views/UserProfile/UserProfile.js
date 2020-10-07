
import React from "react";
import NativeSelect from '@material-ui/core/NativeSelect';
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles,withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";


import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      marginleft:theme.marginleft
    },
  },
  input: {
    borderRadius: 8,
    position: 'relative',
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['']),
    minWidth: 250,
 
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 1,
      boxShadow: '0.1rem ',
    },
  },
}))(InputBase);


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function UserProfile() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="White">
             <b> <h2 className={classes.cardTitleBlack}>Create Issues</h2></b>
             
            </CardHeader>
            <CardBody><br/>
              <GridContainer><br/>
                
                <GridItem xs={12} sm={12} md={6}>
                <InputLabel style={{ color: "Black" }}>Project:</InputLabel>
                <FormControl className={classes.margin}>
       
      
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="" value="" />
          <option value={10}>aaaaa</option>
          <option value={20}>bbbbb</option>
          <option value={30}>ccccc</option>
        </NativeSelect>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <InputLabel style={{ color: "Black" }}>Issue Type:</InputLabel>
                <FormControl className={classes.margin}>
                <NativeSelect

          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="" value="" />
          <option value={10}>aaaaa</option>
          <option value={20}>bbbbb</option>
          <option value={30}>ccccc</option>
        </NativeSelect>
        </FormControl>
                </GridItem>
              </GridContainer><br/>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>

                <InputLabel style={{ color: "Black" }}>Title:</InputLabel>
                <FormControl className={classes.margin}>
                <TextField
          id="outlined-secondary"
          defaultValue=""
          variant="outlined"
          color="secondary"
            />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <InputLabel style={{ color: "Black" }}>Description:</InputLabel>
                <FormControl className={classes.margin}>
                <TextField
          id="outlined-secondary"
          defaultValue=""
          variant="outlined"
          color="secondary"
          input={<BootstrapInput />}
            />
                  </FormControl>
                </GridItem>
              </GridContainer><br/>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <InputLabel style={{ color: "Black" }}>Priority:</InputLabel>
                <FormControl className={classes.margin}>
       
      
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="" value="" />
          <option value={10}>showstopper</option>
          <option value={20}>High</option>
          <option value={30}>Medium</option>
          <option value={30}>Low</option>
          <option value={30}>VeryLow</option>
        </NativeSelect>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <InputLabel style={{ color: "Black" }}>Assignee:</InputLabel>
                <FormControl className={classes.margin}>
       
      
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="" value="" />
         
          <option value={10}>aaaaa</option>
          <option value={20}>bbbbb</option>
          <option value={30}>ccccc</option>
        </NativeSelect>
      </FormControl>
                </GridItem>
              </GridContainer><br/>
             





              <GridContainer>
             
                <GridItem xs={12} sm={12} md={6}>
      
                <FormControl className={classes.margin}>
       
      
                <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Due date"
        type="date"
        defaultValue="2019-09-21"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
      </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
              
                
              <right>  
            <div className={classes.root}>
      <Button variant="contained">Cancel</Button>
      <Button variant="contained" color="primary">
       Submit
      </Button></div></right>
       
                </GridItem>
               
</GridContainer>
 </CardBody>
        <br/>
          </Card>
        </GridItem>
       
      </GridContainer>
    </div>
  );
}

