//import React from "react";
//import React from 'react';

function Home(props) { 
  // console.log(props.user);

  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      <h1 style={{ color: props.user.color }}>
        {props.user.name} is a Web Developer from {props.user.city}
      </h1>
    </div>
  );
  }

export default Home;
