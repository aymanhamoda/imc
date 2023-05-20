import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { FOLDER_NAME } from '../constants/uploadConstants'

const UploadList = ({ submit }) => {
  const [files, setFiles] = useState([])
  const [folderName, setFolderName] = useState('')

  const dispatch = useDispatch()

  const currentFolder = useSelector((state) => state.folderName)
  const { currentFolderName } = currentFolder

  const handleFolderName = (f) => {
    if (folderName) {
      setFolderName(`${folderName}/${f}`)
    } else {
      setFolderName(f)
    }
  }
  useEffect(() => {
    axios
      .get(`/api/uploadedfiles?folderPath=${folderName}`)
      .then((res) => setFiles(res.data))
    dispatch({ type: FOLDER_NAME, payload: folderName })
  }, [folderName, submit])

  return (
    <>
      <h1>Current Path: {currentFolderName && currentFolderName} </h1>
      <Button variant="success" onClick={() => setFolderName('')}>
        Home
      </Button>
      {files.map((f) => (
        <div key={f}>
          {f.search(/\./) > 0 ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action flex-column align-items-start"
              href={
                folderName
                  ? `http://192.168.75.118:3500/uploads/${folderName}/${f}`
                  : `http://192.168.75.118:3500/uploads/${f}`
              }
              style={{
                textDecoration: 'underline',
                color: 'blue',
                borderColor: 'black',
                margin: '5px',
              }}>
              <h4 className="mb-1">{f} </h4>
            </a>
          ) : (
            <a
              className="list-group-item list-group-item-action flex-column align-items-start"
              onClick={() => handleFolderName(f)}
              style={{
                textDecoration: 'underline',
                color: 'red',
                borderColor: 'black',
                margin: '5px',
              }}>
              <h4 className="mb-1">{f} </h4>
            </a>
          )}
        </div>
      ))}
    </>
  )
}

export default UploadList
