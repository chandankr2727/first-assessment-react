import React, { Component } from 'react'

class ClassComponent extends Component{
    render(){
        const yz={
            color:"blue",
            textDecorationLine: "underline"
        }
        return(<div className='class-card'>
            <h1>This is created using Class Component</h1>
            <p>This is done using External CSS</p>
            <p style={yz}>This is done using Inline CSS</p>
        </div>)
    }
}
export default ClassComponent