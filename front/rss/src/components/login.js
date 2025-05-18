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
<Card sx={{ maxWidth: 400}} id="form1" >
      <CardActionArea >
        <CardContent>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <form id='loginformpage' onSubmit={(e)=>{
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
<div id='labelformmargin1'>
<Typography gutterBottom variant="h5" component="div">
            Welcome To R S S
          </Typography>
          <label><h4>Email:</h4></label>
<input className='label1' id='loginformemail' type='email' placeholder="Enter your Email" required />

<label><h4>passward:</h4></label>
<input className='label1' id='loginformpassword' type='password' placeholder="Enter your passward" required />



<br/>
<br/>
</div>
<div id='formBtnmargin11'>
<Button type='submit' variant="contained" disableElevation className='btn-grad' >
      SignIn
    </Button>
    </div>
    <br/>
    <br/>
</form>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
    <br/>
</div>

</>

    )
}