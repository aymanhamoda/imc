import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import courses from '../data/courses'

const CoursePlay = ({ match }) => {
  const courseID = match.params.id

  const getCourseLectures = courses.find(
    (c) => c._id.toString() === courseID.toString()
  )

  const [videoRank, setVideoRank] = useState(1)
  const [playedVideoPath, setPlayedVideoPath] = useState()
  const [playedVideoTitle, setPlayedVideoTitle] = useState('')
  const [viewProgress, setViewProgress] = useState(0)
  

  const autoPlay = () => {
    if (videoRank < courses[1].lectures.length) {
      setVideoRank(videoRank + 1)
      setPlayedVideoPath(`/courses/${videoRank}.mp4`)
    } else {
      setVideoRank(1)
    }
  }
  const handlePlay = (lec) => {
    setPlayedVideoPath(lec.video)
    setPlayedVideoTitle(lec.title)
  }
  useEffect(() => {

    if(!playedVideoPath){
      setPlayedVideoPath(courses[1].lectures[0].video)
    }
  }, [playedVideoPath])
  return (
    <>
      <div className="container py-5">
        <div className="row ">
          <div className="col-md-8  ">
            <ReactPlayer
              playing
              controls
              onProgress={(e) => setViewProgress(e.played)}
              onEnded={() => autoPlay()}
              url={playedVideoPath}
              className="col"
            />
            <div>
              <p>Progress {viewProgress.toFixed(2) * 100} %</p>

              <h3 className="py-3">{playedVideoTitle}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <h1 className='row justify-content-center text-primary'>Video List</h1>
            <p className='row justify-content-center' >Click anyone to play</p>
            {courses[1].lectures.map((lecture) => (
              <div
                key={lecture._id}
                onClick={() => handlePlay(lecture)}
                style={
                  playedVideoPath === lecture.video
                    ? { color: 'white', backgroundColor: 'grey' }
                    : { backgroundColor: 'white' }
                }>
                <h1>{lecture.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursePlay
