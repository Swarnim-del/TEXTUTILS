
import "./App.css";
import React, { components }  from 'react'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
// import About from './components/About'
// import Courses from './components/Courses'
// import Impdates from './components/Impdates'
// import Hero from './components/Hero'
// import Contact from './components/Contact'


function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <Courses />
      <About />
      <Impdates />
  <Contact /> */}
      <Textarea heading="Write your text in the TextArea" />

      </>
  );
}

export default App;


