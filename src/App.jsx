import { useReducer, useState, useRef } from 'react'
import './App.css'
import React from 'react'
import NewPostComponent from './Component/NewPostComponent'

function App() {

  function newPost(state) {
    return { id: Date.now(), name: state, toggle: true }
  }

  const reducer = (name, action) => {
    switch (action.type) {
      case "Add Post":
        return [...name, newPost(action.payload.name)];
      case 'TOGGLE':
        return name.map(post => {
          if (post.id == action.payload.id) {
            return { ...post, toggle: !post.toggle }
          }
          else {
            return post
          }
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "Add Post", payload: { name: state } })
    setState(" ")
  }

  function focus() {
    inputRef.current.focus();
  }

  const [state, setState] = useState("")
  const [name, dispatch] = useReducer(reducer, [])
  const inputRef = useRef()
  // we don't use useReducer in input box, we use useState
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div >
        <input type="text" ref={inputRef} value={state} onChange={(e) => { setState(e.target.value) }} />
        <button type='submit'>Add Post</button>
        </div>

      </form>

      {
        name.map(post =>
          <NewPostComponent key={post.id} post={post} dispatch={dispatch} />
        )
      }
      <button onClick={focus}>Get Back Writing</button>

    </>
  )
}

export default App
















// for increment, decrement, reset
// const initialValue = 0;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "Increment":
//       return state + 1
//     case "Decrement":
//       return state - 1
//     case "Reset":
//       return 0
//     default:
//       return state
//   }
// }

// function App() {
//   const[state, dispatch] = useReducer(reducer, initialValue);

//   return (
//     <div>
//       <div>count: {state}</div>
//       <button onClick={()=>{dispatch({type: "Increment"})}}>Increment</button>
//       <button onClick={()=>{dispatch({type: "Decrement"})}}>Decrement</button>
//       <button onClick={()=>{dispatch({type: "Reset"})}}>Reset</button>
//     </div>
//   )
// }

// export default App