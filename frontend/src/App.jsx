
import './App.css'
// import Login from '../src/pages/login.jsx'
import Landing from '../src/pages/landing.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard.jsx'


function App() {

  return (
    <>
        <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path="/register" element={<Register />} / */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
