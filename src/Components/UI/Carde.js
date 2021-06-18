import React from 'react'
import './Carde.css'

function Carde(props) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Carde
