
import './App.css';
import React from "react";

import { Adress } from './Component/profile/Address';
import { FullName } from './Component/profile/FullName';
import { Photo } from './Component/profile/ProfilePhoto';
function App() {
  return (
   
 <div className="App">
   <Photo/>
   <FullName/>
   <Adress/>
   <div className='title red'>
   <h3>About Me :</h3>
   <p>I’m studying development and I do enjoy it, most aspects of it.<br/> But in this last month there is a lot of hard work and a lot of reading, and I cannot say that I enjoy all of this reading.<br/> But what I really enjoy is working on workshop studies. What I mean is discussing cases and examples.<br/> I like to exchange ideas with people.</p>
   </div>
 </div>
);
}
export default App;
      
   
  



