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
          <form >
<div id='labelformmargin1'>
<Typography gutterBottom variant="h5" component="div">
            Welcome To R S S
          </Typography>
          <label><h4>Email:</h4></label>
<input className='label1' type='email' placeholder="Enter your Email" required />

<label><h4>passward:</h4></label>
<input className='label1' type='password' placeholder="Enter your passward" required />



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