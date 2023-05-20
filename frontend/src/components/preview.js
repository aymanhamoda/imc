import React from 'react'
import {Modal} from 'react-bootstrap'

const Preview = ({ show,filePath }) => {
  return(
      <Modal show={show}>
          <h1>{filePath}</h1>
      </Modal>
  )
}



export default Preview
