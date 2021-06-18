import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const Backdrop =( props )=> {
        return <div className="backdrop" onClick = {props.onDisablePortal}></div>
}

const ModalOverlay = (props) => {
          return (
              
            <div className="modal">
          <div className="content">{props.children}</div>
          </div>
          
          )
}

const portalElement = document.getElementById("overlays")

function Modal(props) {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onDisablePortal={props.onDisablePortal}/>, portalElement )}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
   
        </Fragment>
    )
}

export default Modal
