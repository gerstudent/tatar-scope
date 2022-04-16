import React from 'react';
import MainPage from './pages/MainPage';
import RouterView from './routes/routes';
import './index.css'

const events = [
  {
      name: '',
      description: '',
      location: '',
      date: '',
      tickets: 0,
      price: 0,
      image: ''
  }
]

function App() {
  return (
    // <RouterView></RouterView>
    <MainPage events={events} />
  );
}

export default App;
