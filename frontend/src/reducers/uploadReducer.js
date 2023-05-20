
import { FOLDER_NAME } from "../constants/uploadConstants"

export const folderReducer = (state = {currentFolderName:'/uploads'}, action) => {
    switch (action.type) {
       
      case FOLDER_NAME:
        return {  currentFolderName: action.payload }

      default: 
        return state
    }
  }