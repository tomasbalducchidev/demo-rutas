import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect,useState } from 'react'
import Menu from '../components/Menu'

const About = () => {


  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users = await data.json();
    setEquipo(users);
  }

  const gridContent = (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <Grid item xs={12} ms={12} md={12} xl={12} lg={12}>
        <Card>
          <CardHeader />
          <CardContent>
            <Typography variant='h5' color='primary'>About</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} ms={4} md={4} xl={4} lg={4}>
        <Card>
          <CardMedia
            component='img'
            image={`https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png`}
          />
          <CardHeader />
          <CardContent>
            <Typography variant='h5' color='primary'>React</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} ms={4} md={4} xl={4} lg={4}>
        <Card>
          <CardMedia
            component='img'
            image={`https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png`}
          />
          <CardHeader />
          <CardContent>
            <Typography variant='h5' color='primary'>Vue</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
  return (
    <div>
      <Menu />
      {gridContent}
      <ul>
        {
          equipo.map(item => (
            <li key={item.id}>{item.name} - {item.email}</li>
          ))
        }
      </ul>
      <Button variant='outlined' color='primary'>
        Show alert
      </Button>
    </div>
  )
}

export default About