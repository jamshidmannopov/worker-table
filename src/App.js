import React, { createContext } from 'react'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Router1 from './Router/Router';

export const Mycontext = createContext(null)

function App() {

  return <div className='container'>
    <Link to={'/posts'}>
      <button className='btn btn-danger'>Posts</button>
    </Link>
    <Router1/>
  </div>

}

export default App;