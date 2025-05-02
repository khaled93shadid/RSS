import React from 'react';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Nav from './components/nav.js';
import Main from './components/main.js';
function App() {
  return (

<Router>
<Nav/> 


       <Routes>
               
               <Route path="" element={<Main/>} />
               
               
               
               
        </Routes>
</Router>

)



}

export default App;
