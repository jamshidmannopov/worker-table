import React, { useEffect, useState } from 'react'
import myAxios from '../config'
import SelectUser from './SelectUser';
import {useNavigate} from 'react-router-dom'

function Posts() {

    const navigate = useNavigate()
    const [post,setPost] = useState([]);
    const [page,setPage] = useState(1);
    const [selected,setSelected] = useState(null);
    const [num,setNum] = useState(10)

    useEffect(()=>{
        myAxios.get('posts').then(result => setPost(result.data))
    },[])

    function pushOnePostPage(post){
        navigate('/posts/'+post.id,{state:post})
    }

    return (
    <div>
        <h1>Posts</h1>
        {/* <SelectUser setSelected={setSelected}/> */}
        <div className='row'>
            {post
            .filter((element,index)=> {
                if(!selected){
                    return element
                }else if(element.userId === selected){
                    return element
                }
            })
            .filter((item,index)=> index >= (page-1) * 10 && index < page * 10)
            .map((posts,index)=>{
                return  <div key={posts.id} onClick={()=> pushOnePostPage(posts)} className='col-3 mb-3'>
                    <div className='card h-100'>
                        <div className='card-header bg-danger text-white'>
                            <div>{posts.id +' ' + posts.title}</div>
                        </div>
                        <div className='card-body'>
                            {posts.body}
                        </div>
                    </div>
                </div>
            })}
        </div>
        <div className='row justify-content-center mb-5'>
            <div className='col-4 text-center'><button className='btn btn-danger w-100' onClick={()=> setPage(page > 1 ? page - 1 : 1)}>⇚⇚⇚ Prev</button></div>
            <div className='col-4 text-center fs-3'>{page}</div>
            <div className='col-4 text-center'><button className='btn btn-danger w-100' onClick={()=> setPage(page < num ? page + 1 : num)}>Next ⇛⇛⇛</button></div>
        </div>
    </div>
  )
}

export default Posts