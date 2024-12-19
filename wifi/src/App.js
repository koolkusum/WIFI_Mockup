import './App.css';
import { BrowserRouter, Router, Routes, Route, Navigate } from "react-router-dom";

import Home from './components/Home';


function App() {
  // Determine whether to display the Navbar based on the route
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;