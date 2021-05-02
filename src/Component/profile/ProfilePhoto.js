
 import React from "react";
 import monphoto  from './monphoto.jpg'
 export const Photo = () => {
 return (
   <>
   <img className='pictre' style={{width:300 ,height:300,marginLeft:100,borderStyle:'solid' ,borderSize:1 ,borderColor:'black'  }} src={monphoto} alt ='monphoto' />
    
   </>
 );
};
