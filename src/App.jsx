import React from 'react'
import './App.css'
import DataEntryPage from './components/dataEntryPage'
// import DataMangementPage from './components/dataMangementPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import AudioConfigDisplay from './components/AudioConfigDisplay'
import Surround from './components/Surround'
import Testdata from './components/testdata'
import UploadScreen from './components/UploadScreen'
import UploadProjector from './components/UploadProjector'
import UploadSurround from './components/UploadSurround'


function App() {
  return (
    <Router basename="/cfproject"> {/* 👈 Add this line */}
      <Routes>
        <Route path="/" element={<DataEntryPage />} />
        <Route path="/manage" element={<Audio />} />
        <Route path="/add" element={<Surround />} />
        <Route path='/test' element={<Testdata />}/>
        <Route path='/screen' element={<UploadScreen/>}/>
        <Route path='/proj' element={<UploadProjector/>}/>
        <Route path='/surr' element={<UploadSurround/>}/>

      </Routes>
    </Router>
  )
}

export default App
