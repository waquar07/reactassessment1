import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css'

export default class ClassComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const myStyle={
            color: "blue"
        }
        return (
            
        <div className='ClassComponent'>
            <h2>This is created using class Component</h2>
            <p className='paragraph'>This is done using external CSS</p> 
            <p style={myStyle}>This is done using internal CSS</p>      
        </div>
        
        )
    }
}
