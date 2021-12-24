import React from 'react'
import './Style.css'

function FunctionComponent() {
    const myStyle={
        color:"blue"
    }
    return (
        <div className='functioncomponent'>
            <h2>This is created using Functional Component</h2>
            <p className='paragraph'>This is done using external CSS</p>
            <p style={myStyle}>This is done using internal CSS</p>    
        </div>
    )
}

export default FunctionComponent
