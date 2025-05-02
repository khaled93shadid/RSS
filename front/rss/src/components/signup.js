import '../css/login.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function Signup() {

return(
<div id='signupbody'>
<Card sx={{ maxWidth: 1600 }}>
   <CardMedia
     component="img"
     height="140"
     image="https://th.bing.com/th/id/R.bcafc1431179dd2972e131942af35780?rik=57l%2b4GHiv9tHPw&pid=ImgRaw&r=0"
    />
     </Card>
<Card sx={{ maxWidth: 345 }} id="form" >
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://t4.ftcdn.net/jpg/03/05/50/67/360_F_305506752_71cd0CYovmKU3t2vwmSfFqx05EtuqxKo.jpg"
          alt="pic"
          id='img12'
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Welcome To R S S
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <form >

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
<Button type='submit' variant="contained" disableElevation id='signup'>
      SignUp
    </Button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</form>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
)
}