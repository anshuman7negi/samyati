import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Layout from './pages/Layout';
import Buddy from './pages/Buddy';
import Navbar from "./pages/Navbar"
import Reservation from './pages/Reservation';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/buddy' element={<Buddy />} />
        <Route path='/reservation/:id' element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
