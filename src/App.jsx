import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './components/Main.jsx'
import Show from './components/Show.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/show" element={<Show />}></Route>
    
    </Routes>
  );
}

export default App;
