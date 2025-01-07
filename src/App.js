import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Animation from './components/Animation';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  
  const [selectedMove, setSelectedMove] = useState('');
  
  return (
    <Routes>
      <Route path='/' element={<HomePage setMove={setSelectedMove} />} />
      <Route path='/animation' element={<Animation move={selectedMove} />} />
      
    </Routes>
  );
}

export default App;
