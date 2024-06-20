import './App.css';
import { Home } from './home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
<Routes>
<Route exact path="/" element={<Home />}/>
</Routes>
  );
}

export default App;
