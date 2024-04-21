import React from 'react'
import {Card} from '@mui/material'
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
              {body ? body : undefined}
            </Typography>
            <CardActions>
            {url ? <a href={`${url}`} /> : undefined}
            </CardActions>
          </CardContent>
      </Card>
      </div>
    
  )
}

export default Cards;
