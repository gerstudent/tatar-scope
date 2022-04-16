import React from 'react';
import MainPage from './pages/MainPage';
import RouterView from './routes/routes';
import './index.css'

const events = [
  {
      name: 'Мин татарча сөйләшәм',
      description: 'Һәр елны үткәрелә торган татар телендә сөйләшү акциясе',
      location: 'Казан шәһәре, Бауман урамы',
      date: '26.04.2022',
      tickets: 100,
      price: 10,
      image: 'https://i0.wp.com/tatar-congress.org/wp-content/uploads/2018/04/AFISHA.jpg?fit=1093%2C773&ssl=1'
  }
]
const isLoggedIn = false
const isSignedUp = false
const role = 'Participant'
function App() {
  return (
    // <RouterView></RouterView>
    <MainPage />
  );
}

export default App;
