import React from 'react'
import SideBar from './SideBar'
import TaskBar from './TaskBar'

const MainPage = () => {
  return (
    <div className='bg-white'>
      <SideBar />
      <TaskBar />
    </div>
  )
}

export default MainPage