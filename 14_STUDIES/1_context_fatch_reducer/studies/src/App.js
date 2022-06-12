import './App.css'

//hooks

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import HookUseContext from './components/HookUseContext'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <HookUseContext>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </HookUseContext>
            </BrowserRouter>
        </div>
    )
}

export default App
