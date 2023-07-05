import React, { useEffect, useState } from 'react'
import myAxios from '../config';

function SelectUser({setSelected}) {

    const [user,setUser] = useState([]);

    useEffect(()=>{
        myAxios.get('users').then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    function userValue(event) {
        setSelected(+event.target.value);
    }

    return <select className='form-select mb-3 w-25' onChange={userValue}>
        <option>All</option>
        {
            user.map((item,index)=>{
                return <option key={item.id} value={item.id}>{item.name}</option>
            })
        }
    </select>
}

export default SelectUser