import React from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";


import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// 
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



export default function Notifications() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
 
  
  return (
  //  
<Card className={classes.root}>

  
    <CardHeader color="primary">
    <GridItem xs={12} sm={12} md={12}/>
        <h3 className={classes.cardTitleWhite}>ISSUES</h3>
        
       </CardHeader>
      <CardBody>
         <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            
          <h3><b>TO do 5</b></h3>
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
        </Typography>npm 
      </CardContent>
      <CardActions>
        <Button size="small">SHOW TOPPER</Button>
      </CardActions>
           
      </Card>
          </GridItem>
         
          <GridItem xs={12} sm={12} md={4}>
          <h3>  <b>IN Progress 2</b></h3>
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
        <Button size="small">SHOW TOPPER</Button>
      </CardActions>
           
      </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
           
          <h3><b>Done 3</b></h3>
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
        <Button size="small">SHOW TOPPER</Button>
      </CardActions>
      </Card>
          
         </GridItem>
        </GridContainer>
        
      
      </CardBody>
      <CardBody>
         <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
         
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
        <Button size="small">HIGH</Button>
      </CardActions>
      </Card>
          </GridItem>
         
          <GridItem xs={12} sm={12} md={4}>
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
        <Button size="small">HIGH</Button>
      </CardActions>
      </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
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
        <Button size="small">HIGH</Button>
      </CardActions>
      </Card>
         </GridItem>
        </GridContainer>
        
      
      </CardBody>
      <CardBody>
         <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
       
           
    
          </GridItem>
         
          <GridItem xs={12} sm={12} md={4}>
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
        <Button size="small">LOW</Button>
      </CardActions>
      </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
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
        <Button size="small">HIGH</Button>
      </CardActions>
      </Card>
         </GridItem>
        </GridContainer>
        
<br/><br/>       
      </CardBody>
    </Card>
  
);
}
