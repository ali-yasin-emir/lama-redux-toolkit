import './App.css';
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';
import Update from './components/Update';
import Rightbar from './components/Rightbar';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('John');
  return (
    <div className='container'>
      <Navbar name={name} />
      <main>
        <Leftbar />
        <Update />
        <Rightbar />
      </main>
    </div>
  );
}

export default App;
