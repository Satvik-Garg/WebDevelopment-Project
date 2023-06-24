import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import Attach  from './Attach'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector('#root'))
import Profile from './ProfileApp'


root.render(
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Attach />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>
        </Router>

        </>
)