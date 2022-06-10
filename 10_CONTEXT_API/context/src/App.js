import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
    return (
        <div className="App">
            <h1>Context</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
