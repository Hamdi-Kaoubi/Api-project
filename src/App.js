import './App.css';

import { Route, Routes } from 'react-router-dom';
import MoreDetails from './MoreDetails';
import List from './List';
function App() {
  return (
    <div className='App'>
    
  <Routes>
    <Route path='/MoreDetails/:id' element={<MoreDetails />}/>
    <Route path='/' element={<List />}/>
  </Routes>
    </div>
  );
}

export default App;
