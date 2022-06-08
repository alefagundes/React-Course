import './App.css'

//components
import Home from './pages/Home'
import About from './pages/About'

//hooks
import { HookUseContext } from './components/HookUseContext'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <h1>React Hooks</h1>
            <HookUseContext>
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </HookUseContext>
        </div>
    )
}

export default App
