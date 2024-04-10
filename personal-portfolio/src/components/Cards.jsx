import React from 'react'
import {Card} from '@mui/material'
import {CardMedia} from '@mui/material'
import {CardContent} from '@mui/material'
import {Typography} from '@mui/material'
import {CardLink} from '@mui/material'


const Cards = ({img, title, body, url}) => {
  return (
    <div>
      <Card>
        <CardMedia sx={{height: 130}} image={img} />
          <CardContent>
            <Typography gutterBottom variant='h1' component='div'>
              {title}
            </Typography>

            <Typography gutterBottom variant='body2' component='div'>
              {body}
            </Typography>
            {url ? <CardLink href={`${url}`}> </CardLink> : null}
          </CardContent>
      </Card>


    </div>
  )
}

export default Cards;
