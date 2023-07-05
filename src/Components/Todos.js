import React from 'react'

function Todos({ item, changeChecked, index, deleteItem }) {
    return <div className='row m-2'>
        <div className='col-2'>{index + 1}</div>
        <div className='col-2'>
            <input checked={item.completed} onChange={() => changeChecked(index)} type={'checkbox'} />
        </div>
        <div className='col-6'>
            {item.title}
        </div>
        <div className='col-2'>
            <button className='btn btn-danger' onClick={()=> deleteItem(index)}>Delete</button>
        </div>
    </div>
}

export default Todos