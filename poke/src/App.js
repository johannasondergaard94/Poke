import './App.css';
import { Home } from './home'
import { Route, Routes } from 'react-router-dom'
import { Pokemon } from './pokemon';

function App() {
  return (
<Routes>
<Route exact path="/" element={<Home />}/>
<Route path="/:id" element={<Pokemon />}/>
</Routes>
  );
}

export default App;
