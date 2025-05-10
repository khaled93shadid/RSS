import { useState } from 'react';
import '../css/profile.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Profile(){
return(
<>

<div id='profilecontiner'>
       <div  id='profilecontiner1'>
        <h1 id='profilecontinerh1'> welcome: </h1>
        <h1 id='profilecontinerh1'> Khaled Hafez Shadid </h1>
       </div>
       
       <div id='profilecontiner2'>
          <img id='profilecontinerimg'  src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'/>
       </div>

       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
</div>

<div id='bodycontiner1' >
  
<h1 id='bodyh1'>your courses </h1>
<img id='austronut' src='https://static.vecteezy.com/system/resources/previews/047/307/964/non_2x/transparent-background-3d-cute-astronaut-free-png.png'/>
<br/>
<br/>
<br/>
<br/>
</div>

<div id='bodycontiner2'>

<Card sx={{ maxWidth: 400 }} id='leftcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           cs402
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 400 }} id='rightcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           cs250
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 400 }} id='leftcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           cs401
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 400 }} id='rightcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            cs240
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
</>
)
}