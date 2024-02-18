import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import styles from "./Model.module.css"
const Backdrop = ({onClose}) => { 
  return <div className={styles.backdrop} onClick={onClose}/>
 }
 const ModalOverlay = ({children}) => { 
  return <div className={styles.modal}>
    <div className={styles.content}>{children}</div>
  </div>
  }
  const portalElement=document.getElementById('overlays')
const Model = ({children,onClose}) => {
  return (
  
        <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
    
  )
}

export default Model