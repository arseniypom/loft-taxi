import React from 'react'
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Registration from './pages/Registration';

function App() {
  const [currentPage, setCurrentPage] = React.useState('login')

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {
        {
          'login': <Login setCurrentPage={setCurrentPage} />,
          'registration': <Registration setCurrentPage={setCurrentPage} />,
          'profile': <Profile />,
          'map': <Map />
        }[currentPage]
      }
    </>
  );
}

export default App;
