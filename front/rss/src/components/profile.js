import{react} from 'react';
import { useState } from 'react';
import '../css/profile.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import BuildIcon from '@mui/icons-material/Build';
import Modal from '@mui/material/Modal';

import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


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
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      }));

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [name,setname]=useState('Khaled Hafez Shadid');
      const [state,setstate]=useState('Im khaled shadid 31 years old ,Im customerService Advisor'); 
      const[imagestate,setimagestate]=useState('https://static.vecteezy.com/system/resources/previews/000/574/215/non_2x/vector-sign-of-user-icon.jpg');
      const[coverstate,setcoverstate]=useState('https://wallpapercave.com/wp/wp9607777.jpg');
      const editprofile=()=>{
             const nametoedit=name;
             setname(nametoedit)
             const biotoedit=state;
             setstate(biotoedit)
             const imagetoedit = imagestate;
             setimagestate(imagetoedit);
             const covertoedit = coverstate;
             setcoverstate(covertoedit);
             alert('update profile successful')

      }
      const close=()=>{
        handleClose();
      }
//share
const[sharedata,setsharedata]=useState([
  {txt:'Im enjoy my coffiee while working',image:'https://th.bing.com/th/id/OIP.018ajk3MILmEsi_64slCOQHaE8?rs=1&pid=ImgDetMain'},
  {txt:'my breakfast for today',image:'https://th.bing.com/th/id/R.744c84bea7c61fad933497e23ab2f2da?rik=XUcQvbvPOM7yLQ&riu=http%3a%2f%2fcdn.taste.com.au%2fimages%2frecipes%2fsfi%2f2005%2f07%2f1018.jpg&ehk=45WmqnZucECJnQ4wEgA1lZ43QP1MLSldWj%2fqD%2bs%2fGY0%3d&risl=&pid=ImgRaw&r=0'},
  {txt:'studying for the exam next week',image:'https://th.bing.com/th/id/OIP.n3sAXxDyR0gM6xT1ZwmXdQHaE8?rs=1&pid=ImgDetMain'}
]);
const[sharetxt,setsharetxt]=useState(null);
const[shareimg,setshareimg]=useState(null);
const deletepost=(index)=>{
    const afterdelete= sharedata.filter((_,i)=>i !== index);
    setsharedata(afterdelete);
  }



return(
<>
<div id='pagecolor'>
<div id='divborder'>
<div id='container'>
    <div id='area1'>
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagestate}
          alt="green iguana"
          id='img1'
        />
        <CardContent>
          <Typography id='hname' gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </div>
 
    <div id='area1'>
    <br/>
    <br/>
    <div>
      <Button onClick={handleOpen} id='b1'>Update profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} id='modal'>
          <Typography class='modaltxt' id="modal-modal-title" variant="h6" component="h2">
            Update<HomeIcon color="primary" />Profile:
          </Typography>
          <form class='modalform' onSubmit={(Event)=>{
            Event.preventDefault();
            /*
            const updatedname = [name];
            setname(updatedname);
            const updatedstate=[state];
            setstate(updatedstate);
            const updatedimage=[imagestate];
            setimagestate(updatedimage)
            */
          
          }}>
            <label > <h4 class='labelh4'>name:</h4> </label>
            <input class='label' type='text' placeholder='name'  onChange={(Event)=>{setname(Event.target.value)}}/>
            <br/>
            <label > <h4 class='labelh4'>Personal Picture:</h4> </label>
            <input class='label' type='text' placeholder='personal pic' onChange={(Event)=>{setimagestate(Event.target.value)}}/>
            <br/>
            <label > <h4 class='labelh4'>Cover Picture:</h4> </label>
            <input class='label' type='text' placeholder='cover pic' onChange={(Event)=>{setcoverstate(Event.target.value)}}/>
            <br/>
            <label > <h4>Bio:</h4> </label>
            <TextField
          id="outlined-multiline-static"
          label="write here bio"
          multiline
          rows={6}
          defaultValue=""
          onChange={(Event)=>{setstate(Event.target.value)}} />
            <br/>
            <br/>
            <br/>
            
            <Button onClick={editprofile} variant="contained" disableElevation id='b5' type='submit'> update </Button>
            <Button onClick={close} variant="contained" disableElevation id='b4' > close </Button>
          </form>
          
        </Box>
      </Modal>
    </div>
    
        
   
    </div>
</div>
<br/>
<br/>
<br/>
<br/>
</div>

<div id='bodyprofile'>
<div id='share0'>
<Stack direction="column" spacing={3}>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
    </Stack>
    
   </div>



    <div id='share'>
        <h1 id='h1share'>what do you think,share something... </h1>
        
      <form onSubmit={(Event)=>{Event.preventDefault();
      setsharedata([...sharedata,{txt:sharetxt,image:shareimg}])
      setsharetxt('');
      setshareimg('');
        
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
          value={shareimg}
          onChange={(Event)=>{setshareimg(Event.target.value)}}
        />
      <TextField
          id="outlined-multiline-static"
          label="write here"
          multiline
          rows={3}
          value={sharetxt}
          onChange={(Event)=>{setsharetxt(Event.target.value)}}
        />
        <br />
        <br />
        <Button  type='submit' variant="contained" disableElevation id='b2'>
      share post
    </Button>
    </Box>
        </form>
        </div>
   <div id='share2'>
  

     </div>

</div>


  {sharedata.map((item,index)=>
    <div  className='cardprofile' key={index}>  

    <div>
  <Card sx={{ maxWidth: 345 }}  >
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={item.image}
           id='imgprofile1'
          />
       </CardActionArea>
      <CardActions>
      <Button size='small' variant="contained" disableElevation id='b3' onClick={()=>{deletepost(index)}}>
      delete post
    </Button>            
    </CardActions>
    
    </Card>
    </div>
    <div id='divsharetxt'>
    <h3 className='h22'> {item.txt} </h3>
    </div>

    </div>
  
  )}


</div>

</>
)
}