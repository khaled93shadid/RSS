import React from "react";
import '../css/main.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';



export default function Main(){

return(
<>

<div id="maindivv">

 
<div id="firstdivv">
    <br/>
<div><h1 id="firstdivh1">looking for courses ?</h1></div>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>



<div  id="seconddiv">

<div>
<img id="seconddivimg" src="https://media.licdn.com/dms/image/v2/D4E12AQHboTuz_4x7Sg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712208551976?e=2147483647&v=beta&t=1gnIdnqfUdSq7vY0DK0x2pQ-2gu6WBuBrOx0Zjk4reI"/>
</div>
<div><h1 id="seconddivh1">Feeling Hopless you cant understand your courses?</h1></div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div id="thirddiv">
<h1 id="thirddivh1">Are diffuclt courses making you feel overwhelmed and alone? </h1>
<img id="thirddivimg" src="https://ioaglobal.org/uploads/1730368593.jpg"  alt="pic"/>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>

<div id="seconddiv">

<img id="seconddivimg" src="https://media.istockphoto.com/id/637232624/photo/enhancing-his-entrepreneurial-ambition-with-the-right-tools.jpg?s=612x612&w=0&k=20&c=c1kf2gGn5TGNZypOFMmL2HatRjIfojP3SlxynXLxgfE="  alt="pic"/>
<h1 id="seconddivh11">Do you wish someone guide and support you? </h1>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<div>
<h1 id="part1">EXCELLENCE STARTS HERE </h1>
<img id="part1img" src="https://cdn.vectorstock.com/i/500p/76/36/lightbulb-idea-flat-icon-isolated-on-white-vector-41497636.jpg"/>
<br/>
<br/>
<br/>
</div>



</div>

<div id="middle"> 
    <br/>
<h1 className="nextpageh1">its not a secret recipe: </h1> 
<h3 className="nextpageh2">its a proven strategy developed by RSS team </h3>
<br/> 
</div>


<div id="nextpage">
    

<Card sx={{ maxWidth: 500 }} id="card1">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://miro.medium.com/v2/resize:fit:1400/1*pu8DFyHChI9PzS8r-jxuGQ.jpeg"
       
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Enjoy Learning
              </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 500 }} id="card2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCan09rfnzHqFFl_YGjxJ-GbTXjyzN5kKlw&s"
          
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Become creative
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 500 }} id="card3">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://filestage.io/wp-content/uploads/2023/12/AI-report-header-image.webp"
        
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Easy learning
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
    <Card sx={{ maxWidth: 500 }} id="card2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://imageio.forbes.com/specials-images/imageserve/647f0a67cb37aed23557d5cb/Artificial-intelligence-and-future-concept/960x0.jpg?format=jpg&width=960"
          
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Become creative
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 500 }} id="card1">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://img.freepik.com/premium-photo/ai-generated-illustration-light-bulb-with-colorful-brain-dark-background-creative-thinking-concept_441362-6258.jpg"
       
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Enjoy Learning
              </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>

</>
)
}