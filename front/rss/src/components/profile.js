import { useState } from 'react';
import '../css/profile.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Profile(){
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

return(
<>
 <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style} id='formsettingcolor'>
           <form id='marginsettingform'>
          <div >
          <Typography gutterBottom variant="h5" component="div">
                      Setup Profile
                    </Typography>
          <label><h4>First name:</h4></label>
          <input className='label1' type='text' placeholder="Enter your First Name"  />
          
          <label><h4>Last name:</h4></label>
          <input className='label1' type='text' placeholder="Enter your Last Name"  />
          
          <label><h4>Profile Picture:</h4></label>
          <input className='label1' type='text' placeholder="Add your picture"  />
          
          <br/>
          <br/>
          </div>
          <div id='marginsettinformgbtn'>
          <Button type='submit' variant="contained" disableElevation className='btn-grad' >
                SetUp
              </Button>
              </div>
              <br/>
              <br/>
          </form>
        </Box>
      </Modal>
    </div>
<div id='profilecontiner'>
       <div  id='profilecontiner1'>
        <h1 id='profilecontinerh1'> welcome: </h1>
        <h1 id='profilecontinerh1'> Khaled Shadid </h1>
       </div>
       
       <div id='profilecontiner2'>
          <img id='profilecontinerimg'  src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'/>
          <button onClick={handleOpen} id='settingbtn'><SettingsIcon/></button>
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

<Card sx={{ maxWidth: 600 }} id='leftcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
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

    <Card sx={{ maxWidth: 600 }} id='leftcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
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

    <Card sx={{ maxWidth: 600 }} id='leftcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
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

    <br/>
    <div><h1 id='bodyh1'>what do you think,share something... </h1></div>
    <div id='shareborder'>
    <div id='share'>
        
      <form onSubmit={(Event)=>{Event.preventDefault();
        
      }}>
        
      <Box
      
      sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
      
      autoComplete="off"
      id='box'
    >
      <TextField
          id="outlined-multiline-static"
          label="image url"
          multiline
          rows={3}
          
          //onChange={(Event)=>{setshareimg(Event.target.value)}}
        />
      <TextField
          id="outlined-multiline-static"
          label="write here"
          multiline
          rows={3}
          
          //onChange={(Event)=>{setsharetxt(Event.target.value)}}
        />
        <br />
        <br />
       <div id='sharebtnmargin'> <Button  type='submit' variant="contained" disableElevation className='btn-grad'>share post</Button> </div>
    </Box>
        </form>
        
        </div>
        </div>
         <img id='sharephoto' src='https://previews.123rf.com/images/maylim33/maylim332305/maylim33230501788/204823463-ai-generated-illustration-of-tiny-people-series-sharing-thought-ideas-by-communicated-and.jpg'/>
   
   
</div>
</>
)
}