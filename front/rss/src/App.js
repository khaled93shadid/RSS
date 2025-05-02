import React from 'react';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Nav from './components/nav.js';
import Main from './components/main.js';
import Signup from './components/signup.js';
import Whatsnew from './components/whatsnew.js';

function App() {
  return (

<Router>
<Nav/> 


       <Routes>
               
               <Route path="/main.js" element={<Main/>} />
               <Route path="/signup.js" element={<Signup/>} />
               <Route path="/whatsnew.js" element={<Whatsnew/>} />
              
               
               
               
               
        </Routes>
</Router>

)



}

export default App;
