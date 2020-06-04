import React from "react"
import Header from "./Header"
import BasicTodo from "./BasicTodo"
import Footer from "./Footer"
import './style.css';
function App(){
    return (
        <div>
            <Header />
            <BasicTodo />
            <Footer />
        </div>
    )
}

export default App