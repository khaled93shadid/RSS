import React from 'react';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Nav from './components/nav.js';
import Main from './components/main.js';
import Signup from './components/signup.js';
import Whatsnew from './components/whatsnew.js';
import Footer from './components/footer.js';
import Login from './components/login.js';
import Profile from './components/profile.js';
import Courses from './components/courses.js';
import About from './components/about.js';
import Volunteers from './components/volunteers.js';
function App() {
  return (

<Router>
<Nav/> 


       <Routes>
               
               <Route path="/main.js" element={<Main/>} />
               <Route path="" element={<Main/>} />
               <Route path="/signup.js" element={<Signup/>} />
               <Route path="/whatsnew.js" element={<Whatsnew/>} />
               <Route path="/login.js" element={<Login/>} />
               <Route path="/profile.js" element={<Profile/>} />
               <Route path="/courses.js" element={<Courses/>} />
               <Route path="/about.js" element={<About/>} />
               <Route path="/volunteers.js" element={<Volunteers/>} />
              
               
               
               
               
        </Routes>
        <Footer/>
</Router>

)



}

export default App;
