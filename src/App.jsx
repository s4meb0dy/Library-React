import React from "react"
import "./styles/App.scss"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Readers from "./components/reader/Readers"
import Books from "./components/book/Books"
import Forms from "./components/form/Forms"
import Borrow from "./components/Borrow"
import Return from "./components/Return"
import Search from "./components/search/Search"

function App() {
    return (
        <div className='container'>
            <Navbar />
            <div className='container__main'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/reader' element={<Readers />} />
                    <Route path='/book' element={<Books />} />
                    <Route path='/form' element={<Forms />} />
                    <Route path='/borrow' element={<Borrow />} />
                    <Route path='/return' element={<Return />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
