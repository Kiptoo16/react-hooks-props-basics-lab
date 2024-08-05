import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

import user from '../data/user';
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Home user={user} />
      <About user={user} />
    </div>
  );
}
export default App;