import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Avatar from './Avatar'

function App() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  return (
    <>
      <h2>State in React</h2>
      <Counter/>
      <LikeButton />

      <h2>Todo List</h2>
      {todos.map((value, idx) => <li key={idx}>{value}</li>)}

      <button onClick={() => setTodos([...todos, "todo 3"])}>Click</button>

      <Avatar 
        src="https://pawbark.files.wordpress.com/2015/05/cute-siberian-husky-puppy-sitting-on-grass-puppies-wallpaper-2.jpg" 
        width="100px" 
        height="100px"
      />
      <Avatar 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MC-Pfpy6ZL_tgVaXN4K1zG9kaFDEp_GuJYRfo2GiFvxTudSSp_i5piBIqs81SNX2Pqw&usqp=CAU" 
        width="100px" 
        height="100px"
      />
      <Avatar 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwcI-WpdZ6djg-LBHguaktYp91bo8ZB36xQ&usqp=CAU" 
        width="100px" 
        height="100px"
      />
    </>
  )
}

export default App
