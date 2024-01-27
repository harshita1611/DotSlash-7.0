
import './App.css'
// import Login from '../src/pages/login.jsx'
import Landing from '../src/pages/landing.jsx'
import NewsAndAi from '../src/pages/newsAndAi.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard.jsx'


function App() {

  return (
    <>
      {/* <Login/> */}
      {/* <Landing/> */}
      <NewsAndAi/>
        <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
