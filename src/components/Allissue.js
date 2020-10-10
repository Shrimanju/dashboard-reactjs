import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { SkillBars } from 'react-skills';
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

const skillsData= [
  
  {
   
    level: 86,
    color: "#9400D3",
   
  }
]
const skillsData1= [
  
  {
   
    level: 70,
    color: '#1E90FF',
   
  }
]
const skillsData2= [
  
  {
   
    level: 50,
    color: '#FFD700',
   
  }
]
const skillsData3= [
  
  {
   
    level: 30,
    color: '#00CED1',
   
  }
]
function Allissue() {
  
    return (
     <Card >
            <CardHeader>
              <left>
                <h4>
                  <b>All Issue</b>
                </h4>
              </left>
            
            </CardHeader>
            <div style={cardstyle} >
        <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
        <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}>UI/UX Designer</p>
        <SkillBars skills={skillsData} />
           <div>

           </div>
        </div>
       
      
       
        <div style={cardstyle} >
        <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
        <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}>Technical Associate</p>
        <SkillBars skills={skillsData1} />
           <div>
               
           </div>
        </div>
        <div style={cardstyle} >
        <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
        <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}>UI/UX Designer</p>
        <SkillBars skills={skillsData2} />
           <div>
               
           </div>
        </div>
        <div style={cardstyle} >
        <b style={{fontSize:"16px",paddingLeft: "10px"}}>Lorem ipsum dolor sit</b>
        <p style={{textAlign:"left",fontSize:"13px",color: "#808080",fontFamily: "Times New Roman", paddingLeft: "10px"}}>Technical Associate</p>
        <SkillBars skills={skillsData3} />
           <div>
               
           </div>
        </div>
       
          </Card>
       
     



       
    )
}

export default Allissue
