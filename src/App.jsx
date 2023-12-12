import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Layout from './pages/Layout';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
