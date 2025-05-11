import '../css/volunteers.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function Volunteers(){

return(
<>
<div id='volunteersbackcolor'>
<br/>
<div>
    <h1>Join</h1>
       <h1>Our</h1>
            <h1>Team</h1>
            <img src=''/>
</div>

 <form >
<div id='labelformmargin'>
<Typography gutterBottom variant="h5" component="div">
            Welcome To R S S
          </Typography>
<label><h4>First name:</h4></label>
<input className='label1' type='text' placeholder="Enter your First Name" required />

<label><h4>Last name:</h4></label>
<input className='label1' type='text' placeholder="Enter your Last Name" required />

<label><h4>Email:</h4></label>
<input className='label1' type='email' placeholder="Enter your Email" required />

<label><h4>passward:</h4></label>
<input className='label1' type='password' placeholder="Enter your passward" required />

<label><h4>passward Again:</h4></label>
<input className='label1' type='password' placeholder="Enter your passward Again" required />
<br/>
<br/>
</div>
<div id='formBtnmargin'>
<Button type='submit' variant="contained" disableElevation className='btn-grad' >
      SignUp
    </Button>
    </div>
    <br/>
    <br/>
</form>


</div>
</>
)

}