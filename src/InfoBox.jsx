
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox ({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGR1c3R5JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";
   
    return (
        <div className="InfoBox" >
            <h1>{info.city}</h1>
            <div className='CardContainer' >
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity ={info.humidity}</p>
         <p>minimum temperature ={info.tempMin}&deg;C</p>
         <p>maximum temperature ={info.tempMax}&deg;C</p>
         <p>Weather Feels like ={info.weather}</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    );
}