import '../css/courses.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import   {useState,useEffect}  from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';




const style = {position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 400,bgcolor: 'background.paper',border: '2px solid #000',boxShadow: 24,p: 4,};




export default function Courses() {
  const [openModalId, setOpenModalId] = useState(null);

  const handleOpen = (productId) => {setOpenModalId(productId);};

  const handleClose = () => {setOpenModalId(null);};

const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:5050/api/products", {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (error) { console.error('Fetch error:', error); }
    }

    fetchData();
  }, []);

  if (error) {return <div>Error: {error}</div>;}


return(
  
<>
<div id="coursescontiner" >
<br/>
  <div id="coursescontiner1">
       <h1 id='coursesh1'>Get Started with RSS Courses</h1>
       <img id='coursesimg1' src='https://online.sse.tulane.edu/wp-content/uploads/sites/5/2024/04/tul-sse-articles-what-can-you-do-with-computer-science-degree-if-interested-in-ai-scaled.jpg'/>
    
  </div>
  <div id="coursescontiner2">
    <br/>
    <br/>
       <h1 id='coursesh2'>Computer Science Department</h1>
    
  </div>
  
  <div id="coursescontiner3">

    
     
  
  {products.map((product, index) => (
        <div key={product._id}>
        <Card sx={{ maxWidth: 300 }} id='coursescards' >
          
          <CardMedia
            sx={{ height: 300 }}
            image={product.pic}
            title={product.name}/>
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              ({product.num})
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Join</Button>
            <Button onClick={() => handleOpen(product._id)} size="small">Learn More</Button>
          </CardActions>

        </Card>
        <Modal
            open={openModalId === product._id}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {product.name} Description:
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {product.dis}
              </Typography>
            </Box>
          </Modal>
    
    </div>    
      ))}    


  </div>

  <div id="coursescontiner2">
       <h1 id='coursesh2'>Categories</h1>
    
  </div>
  <div id='coursescategories'> 
<div id='coursescategoriesdiv'> <a href='' id='courseratag'> <h1 id='categoriesh1' > First academic year </h1>  </a> <br/> </div>
<div id='coursescategoriesdiv'><a a href='' id='courseratag'> <h1 id='categoriesh1'> second academic year </h1>  </a> <br/> </div>
<div id='coursescategoriesdiv'><a a href='' id='courseratag'> <h1 id='categoriesh1'>  third academic year </h1> </a> <br/> </div>
<div id='coursescategoriesdiv'><a a href='' id='courseratag'> <h1 id='categoriesh1'>  fourth academic year </h1>  </a> <br/> </div>

  </div>
<br/>
<br/>
</div>
</>
)
}