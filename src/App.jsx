import React from 'react'
import './App.css'
import DataEntryPage from './components/dataEntryPage'
// import DataMangementPage from './components/dataMangementPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import AudioConfigDisplay from './components/AudioConfigDisplay'
import Surround from './components/Surround'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataEntryPage />} />
        <Route path="/manage" element={<Audio />} />
        <Route path='/add'  element={<Surround/>}/>
      </Routes>
    </Router>
  )
}

export default App;
