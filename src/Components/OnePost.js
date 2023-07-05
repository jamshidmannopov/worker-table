import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import myAxios from '../config';

function OnePost() {

    // const {state} = useLocation();
    const [state,setBody] = useState(null)
    const {id} = useParams();
    const [user,setUser] = useState(null);

    useEffect(()=>{
        myAxios.get('users/'+id).then(res => setUser(res.data));
        myAxios.get('posts/'+id).then(res => setBody(res.data));     
    },[]);

  return (
    <div className='row'>
        <h1>OnePost</h1>
        <div className='col-4'>
            <div className='card'>
                <div className='card-header'>{user?.name}</div>
                <div className='card-body'>{user?.phone}</div>
            </div>
        </div>
        <div className='col-8'>
        <div className='card'>
                <div className='card-header'>{state?.title}</div>
                <div className='card-body'>{state?.body}</div>
            </div>
        </div>
    </div>
  )
}

export default OnePost