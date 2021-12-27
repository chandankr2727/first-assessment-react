import React from 'react'

function FunctionComponent () {
    const xy={
        color:"blue",
        textDecorationLine: "underline"
    }
    return(
        <div className='function-card'>
            <h1>This is created using Functional Component</h1>
            <p>This is done using External CSS</p>
            <p style={xy}>This is done using Inline CSS</p>
        </div>
    )
}

export default FunctionComponent