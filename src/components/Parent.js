import React, { Component } from 'react'
import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent'
import './Parent.css';

class Parent extends Component{
    state={
        classCard:false,
        functionalCard:false
    }
    displayFunctional(){
        this.setState({
         functionalCard:!this.state.functionalCard  
        })
    }
    displayClass(){
        this.setState({
            classCard:!this.state.classCard   
        })
    }
    render() {
        return(
            <div className='container'>
                <div className='heading'>Styling Using Functional and Class Component</div>
                <div className='btns'>
                    <button className='btn' onClick={()=>this.displayFunctional()}>To see Styling in Functional Component</button>
                    <button className='btn' onClick={()=>this.displayClass()}>To see Styling in Class Component</button>
                </div>
                <div className='cards'>
                {this.state.functionalCard?<FunctionComponent/>:null}
                {this.state.classCard?<ClassComponent/>:null}
                </div>
            </div>
        )
    }
}

export default Parent