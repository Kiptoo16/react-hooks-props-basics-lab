
import React from "react";
import React from 'react';
import Links from './Links';


function About(props) {
  // console.log(props.user);
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <p>{props.user.bio ? props.user.bio : 'No bio available.'}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links user={props.user} />
    </div>
  );
}
export default About;
