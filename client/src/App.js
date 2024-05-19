import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/home';
import PromptBox from './components/PromptBox'

function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<PromptBox />} />
     </Routes>
    </>
  );
}

export default App;
