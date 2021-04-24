import React from 'react'
import './App.css'

import Nav from './components/Nav'
import { useWindowDimensions } from './hooks'

function App() {
  const { width } = useWindowDimensions()

  return (
    <div className="App">
      <Nav />
      {width > 768 && <div className="sidebar">Sidebar</div>}
      <main className="content">Main</main>
      {width > 768 && <div className="settings">Settings</div>}
    </div>
  )
}
export default App
