import asyncHandler from 'express-async-handler'
import uploadedFiles from '../data/uploadedFiles.js'

// @desc    Fetch all teamwork
// @route   GET /api/teamwork
// @access  Public
const getUploadedFiles =  (req,res)=>{
  res.send(uploadedFiles.map((file)=> file))
} 
export { getUploadedFiles }