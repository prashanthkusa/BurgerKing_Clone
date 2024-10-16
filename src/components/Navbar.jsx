import React, { Component } from "react";
import "./Style.css"
class Navbar extends Component{
    constructor(props){
        super(props)
           
    }
    render() {
        console.log(this.props); // Check if props are received correctly
        return (
            <div className="card">
                <img src={this.props.srcc} alt="" />
                <div className="container">
                    <h2 id="h2"><b>{this.props.h1}</b></h2>
                    <div id="card-p"><p>{this.props.p}</p></div>
                    <div>
                        <button className="small-btn">{this.props.btn}</button>
                    </div>
                </div>
            
            </div>
        )
    }
    
}
export default Navbar