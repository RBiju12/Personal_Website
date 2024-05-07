import React from 'react'
import {Card, Button} from '@mui/material' 
import {CardContent} from '@mui/material'
import {Typography} from '@mui/material'
import {CardActions} from '@mui/material'


const Cards = ({img, title, body, url, height, width}) => {

  return (
    <div>
      <Card sx={{maxWidth: Number(`${width}`), maxHeight: Number(`${height}`), backgroundColor: 'black'}}>
          {img}
          <CardContent>
            <Typography gutterBottom variant='h4' component='div' style={{fontFamily: 'Consolas', color: 'white'}}>
              &nbsp;{title}
            </Typography>

            <Typography gutterBottom variant='body2' component='div' style={{color: 'white'}}>
              {body ? body.map((section, id) => 
            <li key={id}> {section} </li>) : undefined}
            </Typography>
            <CardActions>
            
            <a href={url ?? `${url}`} style={{color: '#00FFFF'}}>
              {url}
            </a>
            </CardActions>
          </CardContent>
      </Card>
      </div>
    
  )
}

export default Cards;
