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


export default function Footer(){
return(
    <>
     <div id="middle"> 
    <div class="footer-basic">
        <footer>
            
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#"><EmailIcon/>RSS_TEAM@gmail.com</a></li>
                
            </ul>
            <div class="social"><a href="#"> <InstagramIcon class="icon ion-social-instagram"/> </a><a href="#"> <FacebookIcon class="icon ion-social-instagram"/> </a><a href="#"><YouTubeIcon class="icon ion-social-instagram"/></a><a href="#"><XIcon class="icon ion-social-instagram"/></a></div>
            <h1 class="copyright">RSS © 2025</h1>
        </footer>
    </div>
</div>    

    </>
)

}