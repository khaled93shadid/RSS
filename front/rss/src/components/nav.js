import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import '../css/nav.css'
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Nav(){
return(
    <>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id='nav2container'>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
           
         <Link to='/main.js' className='nav2link'> <img  id='logo'  src='https://static.vecteezy.com/system/resources/previews/005/216/733/non_2x/initial-letter-r-or-rk-monogram-logo-vector.jpg' alt='logo'/></Link>
            
          </IconButton>
          <Typography id='nav2taleb' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       R S S     
          </Typography>
          <Button color="inherit"><Link to='/signup.js' className='nav2link'> Courses</Link></Button>
          <Button color="inherit"> <Link to="/login.js" className='nav2link' >Volunteers</Link> </Button>
          <Button color="inherit">  <Link to='profile.js' className='nav2link'> Events  </Link> </Button>
          <Button color="inherit">  <Link to='whatsnew.js' className='nav2link'>  About </Link>  </Button>
          
        </Toolbar>
      </AppBar>
      
    </Box>



    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id='nav3container'>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            
          </IconButton>
         <div id='nav2margin'>
         
           <Button  color="inherit" > <Link to='/signup.js' className='nav2link'> <ManageAccountsIcon/></Link> </Button>
           
           <Button  color="inherit"><Link to="/login.js" className='nav2link' ><AccountBoxIcon /></Link></Button>
           
           <Button color="inherit" >  <Link to='profile.js' className='nav2link'> <AccountCircleIcon/>  </Link> </Button>
           
           <Button color="inherit" > <Link to='/whatsnew.js' className='nav2link'>  <FiberNewIcon/>  </Link>  </Button>

          <Button  color="inherit"><Link to='/signup.js' className='nav2link'> signup</Link></Button>
          
          <Button color="inherit" > <Link to="/login.js" className='nav2link' >login</Link> </Button>

          <Button color="inherit" >  <Link to='profile.js' className='nav2link'> profile  </Link> </Button>
          
          <Button color="inherit" >  <Link to='/whatsnew.js' className='nav2link'>  whatsnew </Link>  </Button>

                    </div>
        </Toolbar>
      </AppBar>
      
    </Box>


    </>
)
}