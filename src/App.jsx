import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Layout from './pages/Layout';
import Buddy from './pages/Buddy';
import Navbar from "./pages/Navbar"


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/buddy' element={<Buddy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
