import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions, FormLabel, Container, Link, TextField, Typography } from '@mui/material'

function Login({setCurrentPage}) {
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    const { name, value } = e.target

    setLoginData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = () => {
    console.log('LOGIN DATA: ', loginData)
    setCurrentPage('map')
  }

  return (
    <Container>
      <Box sx={{ maxWidth: 580, maxHeight: 541,}}>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h4">
              Войти
            </Typography>

            <TextField
              id="email"
              name="email"
              label="Email"
              variant="standard"
              onChange={handleInput}
              fullWidth
            />

            <TextField
              id="password"
              name="password"
              label="Пароль"
              type="password"
              variant="standard"
              onChange={handleInput}
              fullWidth
            />

            <FormLabel>
              Забыли пароль?
            </FormLabel>
          </CardContent>

          <CardActions>
            <Button color="primary" size="big" onClick={handleSubmit}>Войти</Button>
          </CardActions>
          
          <Typography>
            Новый пользователь?
            <Link component="button" variant="body1" onClick={() => setCurrentPage('registration')}>Регистрация</Link>
          </Typography>
        </Card>
      </Box>
    </Container>
  )
}

export default Login
