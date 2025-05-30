import '../css/login.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';













export default function Login(){

    return(
<>
 <div id='signupbody'>
    
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
    
    
        <form  id='khs1form' onSubmit={(e)=>{
             e.preventDefault();
             const loginUrl="http://127.0.0.1:5050/api/login"
             const email1 =document.getElementById('loginformemail').value ;
             const password1 =document.getElementById('loginformpassword').value;
             const loginuser = {email:email1,password:password1}
             console.log(loginuser);
            try{const response = fetch(loginUrl,{

                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(loginuser)}).then(res=>res.json()).then(data=>{
                    console.log(data)
                    if(data.message==="user login successfuly"){alert('login complete successfully');sessionStorage.setItem('auth',data.token); window.location.href='profile.js';}
                    else{console.log('Signup Not Complete ')
                        alert('wrong username or password')
                    }
                }) }
            catch(error){console.log(error)}
            
         }}>

          <Card sx={{ maxWidth: 350}} id="form" >
      <CardActionArea >
        <CardContent >
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
<div id='labelformmargin'>
<Typography gutterBottom variant="h5" component="div">
           <h1 id="signupptag">signin</h1>
          </Typography>
        




<input className='input123'   type='email' id='loginformemail' placeholder="Enter your Email" required />
<br/>
<br/>
<br/>


<input className='input123'   type='password' id='loginformpassword' placeholder="Enter your passward" required />

<br/>
<br/>
<br/>
</div>
<div id='formBtnmargin'>
<Button   type="submit" variant="contained" disableElevation  className='btn-grad'>
      Signin
    </Button>
    </div>
    <br/>
    <br/>
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
      <br/>
      <br/>
      <br/>
      
  </div>
</>

    )
}