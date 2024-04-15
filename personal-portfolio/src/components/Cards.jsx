import React from 'react'
import {Card} from '@mui/material'
import {CardMedia} from '@mui/material'
import {CardContent} from '@mui/material'
import {Typography} from '@mui/material'
import {CardActions} from '@mui/material'


const Cards = ({img, title, body, url}) => {


  return (
    <div>
      <Card sx={{maxWidth: 220, maxHeight: 180, backgroundColor: 'black'}}>
          {img}
          <CardContent>
            <Typography gutterBottom variant='h4' component='div' style={{fontFamily: 'Consolas', color: 'white'}}>
              &nbsp;{title}
            </Typography>

            <Typography gutterBottom variant='body2' component='div'>
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
