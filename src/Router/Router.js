import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Posts from '../Components/Posts'
import OnePost from '../Components/OnePost'

function Router() {
  return <Routes>
    <Route path={'/posts'} element={<Posts/>}></Route>
    <Route path={'/posts/:id'} element={<OnePost/>}></Route>
  </Routes>
}

export default Router