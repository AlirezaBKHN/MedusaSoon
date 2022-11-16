import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { Redirect, Route, Routes, BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './Home.jsx';


function App() {
  return (
      <BrowserRouter>
              <layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
              </layout>
      </BrowserRouter>
  )
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);