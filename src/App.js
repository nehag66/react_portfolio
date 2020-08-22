import React from 'react';
import './App.css';
import Image from './assets/aboutPage.jpeg';

const app = () => { 
  return (
    <div>
      <div className="App">
        Belong to Uttar Pradesh, India.
      </div>

      <div className="ImageDiv">
        <img 
          className="Image"
          src={Image} alt={Image}
          align="left"/>
          
      </div>  
      <div className="Text">
           <p>Heya, I'm Neha - a beginner at programming and development. I want to make my career in programming. I was born and brought up in Uttar Pradesh, India. I did my graduation from Ghaziabad, then moved to Delhi, India for my further studies. </p> 
           <p>I am passionate about learning new things. I got my interest in coding developed when I started my Post graduation. Currently, I am pursuing my Post graduation from IP University, Delhi. Apart from being a programmer, I enjoy reading novels and binge watching TV series. </p>
           </div>
    </div>
      
  );
}

export default app;
