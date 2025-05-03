import{react} from 'react';
import { useState } from 'react';
import '../css/whatsnew.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';
import AddCommentIcon from '@mui/icons-material/AddComment';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { List } from '@mui/material';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const labels1 = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const labels2 = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  function getLabelText2(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  function getLabelText3(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }



export default function Whatsnew(){
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const[comment1,setcomment1]=useState('');
    const[comment2,setcomment2]=useState('');
    const[comment3,setcomment3]=useState('');
    const[dataa1,setdataa1]=useState([]);
    const[dataa2,setdataa2]=useState([]);
    const[dataa3,setdataa3]=useState([]);
     
   
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };


const[sharedata,setsharedata]=useState([
  {txt:'Im enjoy my coffiee while working',image:'https://th.bing.com/th/id/OIP.018ajk3MILmEsi_64slCOQHaE8?rs=1&pid=ImgDetMain'},
  {txt:'my breakfast for today',image:'https://th.bing.com/th/id/R.744c84bea7c61fad933497e23ab2f2da?rik=XUcQvbvPOM7yLQ&riu=http%3a%2f%2fcdn.taste.com.au%2fimages%2frecipes%2fsfi%2f2005%2f07%2f1018.jpg&ehk=45WmqnZucECJnQ4wEgA1lZ43QP1MLSldWj%2fqD%2bs%2fGY0%3d&risl=&pid=ImgRaw&r=0'},
  {txt:'studying for the exam next week',image:'https://th.bing.com/th/id/OIP.n3sAXxDyR0gM6xT1ZwmXdQHaE8?rs=1&pid=ImgDetMain'}
]);      
    

     
    



return(
<>




<div id='continer1'>


 


                 <div id='div2'>


            <div className='card11'>
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://i.pinimg.com/originals/1f/aa/2d/1faa2db0ff81ed20349a2215137aa819.jpg'
          alt="picture"
          class='imgnew'
        />
        <CardContent>
          
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback4"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue5) => {
          setValue(newValue5);
        }}
        onChangeActive={(event, newHover5) => {
          setHover(newHover5);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
          </Box>
    

          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>

       <div id='middle1'> <h3 id='h3'>Im enjoy watching my favourite team</h3> 
       <Box id='box1' sx={{ width: '100%', height: 200, maxWidth: 360, bgcolor: 'background.paper' }}>
     
      <form onSubmit={(Event)=>{
           Event.preventDefault();
           setdataa1([...dataa1,{comment:comment1}]);
           setcomment1('');

      }}> 
    <TextField
          id="outlined-multiline-static"
          label="comment on post.."
          multiline
          rows={5}
          value={comment1}

           
          onChange={(Event)=>{setcomment1(Event.target.value)}}
          />
           <Button size='small' className='btn-grad'  type='submit' variant="contained" disableElevation >Replay </Button> 
           </form>
           </Box>
   
       </div>
       
       <div id='div23' > 
      
      <Stack direction="row" spacing={4}
      >
      <AddCommentIcon/> 
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
    </Stack>  
       <List
      sx={{
        width: '100%',
        maxWidth: 380,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 160,
        '& ul': { padding: 0 },
      }}
      
    >
      
          
           
            {dataa1.map((item,index) => (
              <ul key={index}>
              <li > <h4 id='comment'>{<CommentIcon/>}{item.comment}</h4> </li>
              </ul>
            ))}
          
      
    </List>
      
       
         
         </div> 
        


    </div>



    <div className='card11'>
                 <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/R.744c84bea7c61fad933497e23ab2f2da?rik=XUcQvbvPOM7yLQ&riu=http%3a%2f%2fcdn.taste.com.au%2fimages%2frecipes%2fsfi%2f2005%2f07%2f1018.jpg&ehk=45WmqnZucECJnQ4wEgA1lZ43QP1MLSldWj%2fqD%2bs%2fGY0%3d&risl=&pid=ImgRaw&r=0"
          alt="picture"
          class='imgnew'
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback1"
        value2={value}
        precision={0.5}
        getLabelText2={getLabelText2}
        onChange={(event, newValue1) => {
          setValue(newValue1);
        }}
        onChangeActive={(event, newHover1) => {
          setHover(newHover1);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      
    </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <div id='middle1'> <h3 id='h3'>My breakfast</h3> 
       <Box id='box1' sx={{ width: '100%', height: 200, maxWidth: 360, bgcolor: 'background.paper' }}>
     
      <form onSubmit={(Event)=>{
           Event.preventDefault();
           setdataa2([...dataa2,{comment:comment2}]);
           setcomment2('');

      }}> 
      
    <TextField
          id="outlined-multiline-static"
          label="comment on post.."
          multiline
          rows={5}
          value={comment2} 
          onChange={(Event)=>{setcomment2(Event.target.value)}}
          />
           <Button size='small' className='btn-grad'  type='submit' variant="contained" disableElevation >Replay </Button> 
           </form>
           </Box>
   
       </div>
       
       <div id='div23' >
       <Stack direction="row" spacing={4}
      >
      <AddCommentIcon/> 
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
    </Stack>  
      
       <List
      sx={{
        width: '100%',
        maxWidth: 380,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 160,
        '& ul': { padding: 0 },
      }}
      
    >
      
          
           
            {dataa2.map((item,index) => (
              <ul key={index}>
              <li > <h4 id='comment'>{<CommentIcon/>}{item.comment}</h4> </li>
              </ul>
            ))}
          
      
    </List>
      
       
         
         </div>
    </div>


    <div className='card11'>
                 <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.n3sAXxDyR0gM6xT1ZwmXdQHaE8?rs=1&pid=ImgDetMain"
          alt="picture"
          class='imgnew'
        />
        <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback3"
        value3={value}
        precision={0.5}
        getLabelText3={getLabelText3}
        onChange={(event, newValue3) => {
          setValue(newValue3);
        }}
        onChangeActive={(event, newHover3) => {
          setHover(newHover3);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
          </Box>
                 </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 
    <div id='middle1'> <h3 id='h3'>reading book at my breaktime</h3> 
       <Box id='box1' sx={{ width: '100%', height: 200, maxWidth: 360, bgcolor: 'background.paper' }}>
     
      <form onSubmit={(Event)=>{
           Event.preventDefault();
           setdataa3([...dataa3,{comment:comment3}]);
           setcomment3('');

      }}> 
    <TextField
          id="outlined-multiline-static"
          label="comment on post.."
          multiline
          rows={5}
          value={comment3}
          onChange={(Event)=>{setcomment3(Event.target.value)}}
          />
           <Button size='small' className='btn-grad'  type='submit' variant="contained" disableElevation >Replay </Button> 
           </form>
           </Box>
   
       </div>
       
       <div id='div23' >
       <Stack direction="row" spacing={4}
      >
      <AddCommentIcon/> 
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
    </Stack>  
       
       <List
      sx={{
        width: '100%',
        maxWidth: 380,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 160,
        '& ul': { padding: 0 },
      }}
      
    >
      
          
           
            {dataa3.map((item,index) => (
              <ul key={index}>
              <li > <h4 id='comment'>{<CommentIcon/>}{item.comment}</h4> </li>
              </ul>
            ))}
          
      
    </List>
      
       
         
         </div>

   </div>


   


                 </div>










</div>

</>
)
}