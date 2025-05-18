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
    <div className="footer-basic">
        <footer>
            
            <ul className="list-inline">
                <li className="list-inline-item"><a href="main.js">Home</a></li>
                <li className="list-inline-item"><a href="main.js">Services</a></li>
                <li className="list-inline-item"><a href="about.js">About</a></li>
                <li className="list-inline-item"><a href="about.js">Terms</a></li>
                <li className="list-inline-item"><a href="#"><EmailIcon/>RSS_TEAM@gmail.com</a></li>
                
            </ul>
            <div className="social"><a href="#"> <InstagramIcon className="icon ion-social-instagram"/> </a><a href="#"> <FacebookIcon className="icon ion-social-instagram"/> </a><a href="#"><YouTubeIcon className="icon ion-social-instagram"/></a><a href="#"><XIcon className="icon ion-social-instagram"/></a></div>
            <h1 className="copyright">RSS © 2025</h1>
        </footer>
    </div>
</div>    

    </>
)

}