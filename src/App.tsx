import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './components/Landing'
import { SignIn } from './components/SignIn'
import { ReferForm } from './components/ReferForm'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/refer-form' element={<ReferForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
