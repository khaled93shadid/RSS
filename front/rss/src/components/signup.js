import '../css/login.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Await } from 'react-router-dom';
import Profile from '../components/profile.js';
import { useNavigate } from 'react-router-dom';







export default function Signup() {
  const navigate = useNavigate();

return(
<>
  <div id='signupbody'>
    
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
    
    
        <form  id='khs1form' onSubmit={(f)=>{
           f.preventDefault();
           const create = "http://127.0.0.1:5050/api/createUser";
           //const khsform = document.getElementById('khs1form');
           const fnamesu = document.getElementById('signupfirstname').value;
           const lnamesu = document.getElementById('signuplastname').value;
           const emailsu = document.getElementById('signup1email').value;
           const passwordsu = document.getElementById('signup1Password').value;
           const signupuser={first_name:fnamesu,last_name:lnamesu,email:emailsu,password:passwordsu};
           console.log(signupuser)
           
               try{ var response = fetch(create,{
                      method:"POST",
                      headers:{'Content-Type':'application/json'},
                      body:JSON.stringify(signupuser),}).then(res=>res.json()).then(data=>{console.log(data)
                       if(data){alert('signup complete successfully');window.location.href='login.js'; }
                       else{console.log('Signup Not Complete ')}   })}
           
                      catch(error){console.log(error)}   }}>

          <Card sx={{ maxWidth: 350}} id="form" >
      <CardActionArea >
        <CardContent >
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
<div id='labelformmargin'>
<Typography gutterBottom variant="h5" component="div">
           <h1 id="signupptag">signup</h1>
          </Typography>
        

<input className='input123'  type='text' id='signupfirstname' placeholder="Enter your First Name" required />
<br/>
<br/>
<br/>

<input className='input123'  type='text' id='signuplastname' placeholder="Enter your Last Name" required />
<br/>
<br/>
<br/>


<input className='input123'   type='email' id='signup1email' placeholder="Enter your Email" required />
<br/>
<br/>
<br/>


<input className='input123'   type='password' id='signup1Password' placeholder="Enter your passward" required />

<br/>
<br/>
<br/>
</div>
<div id='formBtnmargin'>
<Button   type="submit" variant="contained" disableElevation  className='btn-grad'>
      SignUp
    </Button>
    </div>
    <br/>
    <br/>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

         </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
  </div>

</>
)
    

}


 