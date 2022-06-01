import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTrip from './components/AddTrip';
import Home from './components/Home';
import Login from './components/Login';
import MyTravels from './components/MyTravels';
import PlannedTrips from './components/PlannedTrips';
import Settings from './components/Settings';
import SignUp from './components/SignUp';
import Travel from './components/Travel';
import { useState } from 'react';


function App() {
  const [theme,setTheme] = useState(true)
  return (
    <Router>
      <Routes>
          <Route path='/' exact element={<Home theme = {theme} setTheme= {setTheme}/>} />
          <Route path='/my-travels' exact element={<MyTravels theme = {theme} setTheme= {setTheme}/>} />
          <Route path='/planned-trips' exact element={<PlannedTrips theme = {theme} setTheme= {setTheme}/>} />
          <Route path='/add-a-trip' exact element={<AddTrip theme = {theme} setTheme= {setTheme}/>} />
          <Route path='/settings' exact element={<Settings theme = {theme} setTheme= {setTheme}/>} />
          <Route path='/login' exact element={<Login theme = {theme} setTheme= {setTheme}/>}/>
          <Route path='/signup' exact element={<SignUp theme = {theme} setTheme= {setTheme}/>}/>
          <Route path='/travel' exact element={<Travel theme = {theme} setTheme= {setTheme}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
