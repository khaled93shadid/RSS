import '../css/about.css'
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
<div id='aboutbackcolor'> 
<div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <div class="responsive-container-block leftSide">
      <p class="text-blk heading">
        Volunteers</p>
      <form id='formmargin1'>

<Typography id='font1' gutterBottom variant="h5" component="div">
            you can now join our team to share Experience in education to help others 
          </Typography>
          <div id='volunterform'>
<label><h4>First name:</h4></label>
<input className='label1' type='text' placeholder="Enter your First Name" required />

<label><h4>Last name:</h4></label>
<input className='label1' type='text' placeholder="Enter your Last Name" required />

<label><h4>Email:</h4></label>
<input className='label1' type='email' placeholder="Enter your Email" required />


<br/>
<br/>

<div id='formBtnmargin1'>
<Button type='submit' variant="contained" disableElevation className='btn-grad' >
      Send
    </Button>
    </div>
    </div>
    <br/>
    <br/>
</form>   
 </div>
    <div class="responsive-container-block rightSide">
      <img class="number1img" src="https://miro.medium.com/v2/resize:fit:1024/1*vZA06_ZVrKKwwnQ9LdBm6Q.png"/>
      <img class="number2img" src="https://imageio.forbes.com/specials-images/imageserve/658f1e20247adb81714231fc/Business-People-And-Robot-Putting-Their-Hands-Together--Team-Community--Unity-/960x0.jpg?height=546&width=711&fit=bounds"/>
      <img class="number3img" src="https://media.licdn.com/dms/image/v2/D4E12AQGETXHfFzyXSQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1724782189039?e=2147483647&v=beta&t=or0CKaYeOZb9fBPy7I-94M2hYe5W_GfXu8m9C9F7nGY"/>
      <img class="number5img" src="https://img.freepik.com/premium-photo/teamwork-makes-dream-work-image-diverse-team-members-highfiving-each-other-celebration-competing-project-generative-ai_117038-12530.jpg"/>
      <iframe allowfullscreen="allowfullscreen" class="number4vid" poster="https://redresscompliance.com/wp-content/uploads/2024/02/Assembling-the-Dream-Team-for-AI-Service-Implementation-ft.webp" src="https://redresscompliance.com/wp-content/uploads/2024/02/Assembling-the-Dream-Team-for-AI-Service-Implementation-ft.webp">
      </iframe>
      <img class="number7img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdB29RoyRN6g93TN_b0qwlkyQWlQFsP4qPVA&s" />
      <img class="number6img" src="https://media.licdn.com/dms/image/v2/D5612AQFZp9533WpwmQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1686327760717?e=2147483647&v=beta&t=Rua2HyajDO-X_PDfy1BqcJVSdoZClYcrKaj8G8aFzdo" />
    </div>
  </div>
</div>
      </div>

</>
)

}