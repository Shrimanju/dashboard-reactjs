import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
const cardstyle={
    backgroundColor:"white",
    height:"100px",
    width:"326px",
    border:"none",
    // display:'flex',
    borderCollapse: "separate",
    borderSpacing: "15px 12px",
    borderBottom:"0.3px ridge ",
    borderTop:"0.3px ridge ",
    // justifyContent:"space-between",
}

function Highpriority() {
    
    return (
        <div> <Card >
            <CardHeader>
              <left>
           
                <h4>
                  <b>High Priority</b>
                </h4>
              </left>
             
            </CardHeader>
            <div style={cardstyle} >
            <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
            <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}> Lorem ipsum dolor sit amet ,conctetur adipiscing elit .Ut ut gravida dolor .Phasellus vitae sem auctor</p>
               <div>

               </div>
            </div>
           
          
           
            <div style={cardstyle} >
            <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
            <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}> Lorem ipsum dolor sit amet ,conctetur adipiscing elit .Ut ut gravida dolor .Phasellus vitae sem auctor</p>
               <div>
                   
               </div>
            </div>
            <div style={cardstyle} >
            <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
            <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}> Lorem ipsum dolor sit amet ,conctetur adipiscing elit .Ut ut gravida dolor .Phasellus vitae sem auctor</p>
               <div>
                   
               </div>
            </div>
            <div style={cardstyle} >
            <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
            <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}> Lorem ipsum dolor sit amet ,conctetur adipiscing elit .Ut ut gravida dolor .Phasellus vitae sem auctor</p>
               <div>
                   
               </div>
            </div>
           
          </Card>

          </div>
        
        
  



       
    )
}

export default Highpriority
