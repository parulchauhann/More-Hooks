import React from 'react'

function NewPostComponent({key, post, dispatch}) {
  return (
    <div className='bg'>
        <div>
            {post.toggle?<h3>{post.name}</h3>:<h3>The context is hidden.</h3>}
        </div>
        <button onClick={()=>dispatch({type:'TOGGLE' ,payload:{id:post.id}})}>Toggle</button>
    </div>
  )
}

export default NewPostComponent