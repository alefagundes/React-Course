import './App.css'

//configuration react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//import pages
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                {/*9 - search */}
                <SearchForm />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/*4 - Rota dinamica para produtos */}
                    <Route path="/products/:id" element={<Product />} />
                    {/*6 - nested router */}
                    <Route path="/products/:id/info" element={<Info />} />
                    {/*9 - search */}
                    {/*10 - Direct */}
                    <Route path="/company" element={<Navigate to="/about" />} />
                    <Route path="/search" element={<Search />} />
                    {/* 7 -no match route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
