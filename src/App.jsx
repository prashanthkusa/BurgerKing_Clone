import Navbar from './components/Navbar';
import data from "./components/Db"
import Nav from "./components/Nav"
import Footer from './components/Footer';
import Home from './components/Home';
import Footertop from './components/Footertop';
import { Component } from 'react';
import React from 'react';

class App extends Component{
    constructor(props){
        super(props)
           
    }
    render() {
        return (
           <>
            <Nav />
      <Home />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
         {
            data.map((x, index) => (
               <Navbar 
                  key={index}
                  srcc={x.srcc} 
                  h1={x.h1} 
                  p={x.p} 
                  btn={x.btn} 
               />
            ))
         }
      </div>
      <Footertop />
      <Footer />
           </>
        )
    }
    
}
export default App
