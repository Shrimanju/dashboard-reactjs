/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingleft:"50px",
    paddingright:"50px",
    justify:"center",
    flexGrow:1,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const buttonToLink = {

  textAlign: 'center',
  background: '#FF0000',
  fontSize: '1em',
margin: ".3rem ",
      padding: "5px px",
      // border: 'groove',
      cursor: 'pointer', 
      minHeight: "auto",
      minWidth: "auto",
      position: "relative",
      fontWeight: "400",
      letterSpacing: "0",
      // willChange: "box-shadow, transform",
      // opacity:0.8,

}
const Issue = {

  textAlign: 'left',
 
  fontSize: '2.5em',
margin: ".9rem ",
      padding: "1px 20px",
      // border: 'groove',
      cursor: 'pointer', 
      minHeight: "20px",
      minWidth: "20px",
      position: "relative",
      fontWeight: "400",
      letterSpacing: "1",
      // willChange: "box-shadow, transform",
      // opacity:0.8,

}
const Cardstyle = {

  textAlign: 'left',
 
  background: '#EBEDF4',
margin: ".5rem ",
      padding: "1px 1px",
      border: 'none',
      cursor: 'pointer', 
      minHeight: "10px",
      minWidth: "2px",
      position: "relative",
 
      letterSpacing: "1",
      willChange: "box-shadow, transform",
      opacity:18,

}
const buttonToLink1 = {

  textAlign: 'center',
  background: '#FFFF00',
  fontSize: '1em',
margin: ".3rem ",
      padding: "5px px",
   
      cursor: 'pointer', 
      minHeight: "auto",
      minWidth: "auto",
      position: "relative",
      fontWeight: "400",
      letterSpacing: "0",
    

}
const buttonToLink2 = {

  textAlign: 'center',
  background: '#008000',
  fontSize: '1em',
margin: ".3rem ",
      padding: "5px px",
      // border: 'groove',
      cursor: 'pointer', 
      minHeight: "auto",
      minWidth: "auto",
      position: "relative",
      fontWeight: "400",
      letterSpacing: "0",
      // willChange: "box-shadow, transform",
      // opacity:0.8,

}
const TextPosition = {

  textAlign: 'center',
  
}

export default function Notifications() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
 
  
  return (
  //  
<Card className={classes.root}>

   
    <div><h3 style={Issue}><b>Issue</b></h3></div>
        
    

      <CardBody>
         <GridContainer>
         <div  GridItem xs={12} sm={12} md={4} style={Cardstyle}>      
        
            
          <h3 style={TextPosition}><b>TO do 5</b></h3>
          <Card>
          <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
       
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink} onClick={event =>  window.location.href='/admin/issue'}> <b>High Priority</b></button>
      </CardActions>
           </Card>
           <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink} onClick={event =>  window.location.href='/admin/issue'}> <b>High Priority</b></button>
      </CardActions>
           </Card>
           <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink} onClick={event =>  window.location.href='/admin/issue'}> <b>High Priority</b></button>
      </CardActions>
           </Card>
           <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink} onClick={event =>  window.location.href='/admin/issue'}> <b>High Priority</b></button>
      </CardActions>
           </Card>
         </div>



         <div  GridItem xs={12} sm={12} md={4} style={Cardstyle}>  
         
          <div><h3 style={TextPosition}><b>IN Progress 2</b></h3></div>
          <Card>
           
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink1} onClick={event =>  window.location.href='/admin/issue'}><b>In Progress</b></button>
      </CardActions>
           
      </Card>
      <Card>
           
           <CardContent>
         <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b>id:PCG836342</b>
         </Typography>
         <Typography variant="h5" component="h2">
         <b> Lorem ipsum dolor sit</b>
         </Typography>
         Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
         elit .Ut gravida dolor .Phasellus vitae sem.
         <Typography variant="body2" component="p">
         
           <br />
           {'Sijio m peter'}
         </Typography>
       </CardContent>
       <CardActions>
       <button style={buttonToLink1} onClick={event =>  window.location.href='/admin/issue'}><b>In Progress</b></button>
       </CardActions>
            
       </Card>
       <Card>
           
           <CardContent>
         <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b>id:PCG836342</b>
         </Typography>
         <Typography variant="h5" component="h2">
         <b> Lorem ipsum dolor sit</b>
         </Typography>
         Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
         elit .Ut gravida dolor .Phasellus vitae sem.
         <Typography variant="body2" component="p">
         
           <br />
           {'Sijio m peter'}
         </Typography>
       </CardContent>
       <CardActions>
       <button style={buttonToLink1} onClick={event =>  window.location.href='/admin/issue'}><b>In Progress</b></button>
       </CardActions>
            
       </Card>
        </div>



        <div  GridItem xs={12} sm={12} md={4} style={Cardstyle}>  
           
          
          <div><h3 style={TextPosition}><b>Done 3</b></h3></div>
          <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink2} onClick={event =>  window.location.href='/admin/issue'}> <b>Done</b></button>
      </CardActions>
      </Card>
      <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink2} onClick={event =>  window.location.href='/admin/issue'}> <b>Done</b></button>
      </CardActions>
      </Card>
      <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink2} onClick={event =>  window.location.href='/admin/issue'}> <b>Done</b></button>
      </CardActions>
      </Card>
      <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink2} onClick={event =>  window.location.href='/admin/issue'}> <b>Done</b></button>
      </CardActions>
      </Card>
      <Card>
          <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <b>id:PCG836342</b>
        </Typography>
        <Typography variant="h5" component="h2">
        <b> Lorem ipsum dolor sit</b>
        </Typography>
        Lorem ipsum dolor sit amet ,conctetur adipicing <br/>
        elit .Ut gravida dolor .Phasellus vitae sem.
        <Typography variant="body2" component="p">
        
          <br />
          {'Sijio m peter'}
        </Typography>
      </CardContent>
      <CardActions>
      <button style={buttonToLink2} onClick={event =>  window.location.href='/admin/issue'}> <b>Done</b></button>
      </CardActions>
      </Card>
      </div>
        </GridContainer>
        
      
      </CardBody>
     
    </Card>
  
);
}
