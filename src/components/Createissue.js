
import React, { useState,useMemo } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {useDropzone} from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const buttonToLink = {
      fontSize: '1em',
      textAlign: 'center',
      color: 'black',
      background: 'Gainsboro',
      margin: ".3rem ",
      padding: "9px 19px",
      // border: 'groove',
      cursor: 'pointer', 
      minHeight: "auto",
      minWidth: "auto",
      position: "relative",
      fontWeight: "400",
      letterSpacing: "0",
      // willChange: "box-shadow, transform",
      opacity:0.8,
    }

const Tab = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid blue;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['All','Comments','Work log','History','Activity'];
const fontstyle = {
  fontWeight: 'bold',
  
};
const fontstyle1={
  color: 'red',
}
const fontstyle3={
  color: 'blue',
  fontSize:13
}
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  borderWidth: 2,
  borderRadius: 4,
  borderColor: 'Gray',
  borderStyle: 'dotted',
  backgroundColor: 'white',
  color: 'black',
  outline: 'none',
  transition: 'border .84s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};




export default function Createissue() {

 

  const classes = useStyles();

  const [active, setActive] = useState(types[0]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);
  return (

    
    <div>
    <Card></Card>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
        <h3>Lorem ipsum dolor sit amet ,consectetur adipiscing .Sed eu consectetur erat.</h3>
        </Grid>
        </Grid>
    </div>
 
  
    

    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}sm={12} md={12}>
        <button style={buttonToLink} > Edit</button>
           <button style={buttonToLink} > Comment</button>
           <button style={buttonToLink} > Assign</button>
           <button style={buttonToLink} > WontFix</button>
           <button style={buttonToLink} > Accept</button>
           <button style={buttonToLink} > WorkFix</button>
        </Grid>
        </Grid>
         
    </div>

    <div className={classes.root}>
      <Grid container spacing={1} >

        
        <Grid item xs={2}sm={2} md={2}>
         <p>Type:</p>
         <p>Priority:</p>
         <p>Affects Version/s:</p>
         <p>components/s:</p>
         <p>Labels:</p>
         <p>Sprint:</p>
         <p>Story Points:</p>

        </Grid>
        <Grid item xs={2} sm={2} md={2}style={fontstyle} >
        <p>Task</p>
         <p style={fontstyle1}>High Priority</p>
         <p>None</p>
         <p>None</p>
         <p>Webetc</p>
         <p><br/></p>
         <p>6</p>
        </Grid>
        <Grid item xs={2}sm={2} md={2}>
        <p>Status:</p>
        <p>Resolution:</p>
        <p>Fix Version/s:</p>
        </Grid>
        <Grid item xs={2}sm={2} md={2} style={fontstyle}>
        <p>New</p>
        <p>Unresplned</p>
        <p>None</p>
        </Grid>
        
        <Grid item xs={2}  sm={2} md={2}>
        <p >Assignee:</p>
        <p>Reporter:</p>
        <p>Votes:</p>
        <p>Watchers:</p>
        <p>Created:</p>
        <p>Updated:</p>

        </Grid>
        <Grid item xs={2} sm={2} md={2}style={fontstyle}>
        <p >Sijo M Peter</p>
        <p>Sijo M Peter</p>
        <p>0</p>
        <p style={fontstyle3}>1 Stop watching this issue</p>
        <p>01.01.2019</p>
        <p>01.01.2019</p>
        </Grid>
      </Grid>
    </div>
 










    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}sm={8} md={8}>
        <b>  <p>Description</p></b>
            <Link to="">Click</Link> to add description
       
        </Grid>
        <Grid item xs={4}sm={4} md={4}>
        <b>  <p>Agile</p></b>
            <p>View Onboard</p>
        </Grid>
        </Grid>
    </div>
 

         
         
         

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}sm={6} md={6}>
        <b> <p>Attachment</p></b>
        <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag and Drop the files to attach </p>
      </div>
      
    </div>
        </Grid>
        </Grid>
    </div>
         

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}sm={8} md={8}>
        <b> <p>Activity</p></b>
        
        <ButtonGroup>
          {types.map(type => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>
        <p />
        <p>There are no comments yet on this issue:  </p>
        <button style={buttonToLink} > {active}</button>
        </Grid>
        </Grid>
    </div>
       </div>
  );
}


