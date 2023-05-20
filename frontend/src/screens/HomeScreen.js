import React, { useState } from 'react'
import UploadList from './UploadList'
import Promotion from '../components/Promotion'
import HomeCalcPart from '../components/homeCalcPart'
import Preview from '../components/preview'

const HomeScreen = () => {
  return (
    <>
      <Preview />
      <h1>Welcome to Clinical Pharmacy Platform</h1>
      <p>
        <storng>We hope that you wil be the best</storng>
      </p>
      <Promotion />
      <HomeCalcPart />
      <UploadList />
    </>
  )
}

export default HomeScreen
