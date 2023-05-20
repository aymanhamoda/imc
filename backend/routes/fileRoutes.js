import express from 'express'
const router = express.Router()
import uploadedFiles from '../backend/data/uploadedFiles.js'


router.route('/').get((req,res)=>{
    res.send(uploadedFiles.map((file)=> file))
  })

 export default router