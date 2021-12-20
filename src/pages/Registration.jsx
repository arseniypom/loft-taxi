import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions, Container, Link, TextField, Typography } from '@mui/material'

function Registration({setCurrentPage}) {
  const [registrationData, setRegistrationData] = React.useState({
    email: '',
    name: '',
    password: ''
  })

  const handleInput = (e) => {
    const { name, value } = e.target

    setRegistrationData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = () => {
    console.log('REGISTRATION DATA: ', registrationData)
    setCurrentPage('map')
  }



  return (
    <Container>
      <Box sx={{ maxWidth: 580, maxHeight: 541,}}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4">
              Регистрация
            </Typography>

            <TextField
              id="email" 
              name="email"
              label="Email"
              variant="standard"
              onChange={handleInput}
              fullWidth
              required
            />

            <TextField
              id="name"
              name='name'
              label="Как Вас зовут?"
              type="text"
              variant="standard"
              onChange={handleInput}
              fullWidth
              required
            />

            <TextField
              id="password"
              name='password'
              label="Придумайте пароль"
              type="password"
              variant="standard"
              onChange={handleInput}
              fullWidth
              required
            />

          </CardContent>
          <CardActions>
            <Button color="primary" size="big" onClick={handleSubmit}>Зарегистрироваться</Button>
          </CardActions>
          <Typography>
            Уже зарегистрированы?
            <Link component="button" variant="body1" onClick={() => setCurrentPage('login')}>Войти</Link>
          </Typography>
        </Card>
      </Box>
    </Container>
  )
}

export default Registration
