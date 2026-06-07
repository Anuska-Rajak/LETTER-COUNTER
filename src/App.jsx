import {useState} from 'react'
function App(){
  const [text,setText] =  useState('')
  // this logic strips out spaces and special characters, counting only a-z and A-Z
  const letterCount=text.replace(/[^a-zA-Z]/g, '').length
  return (
    <div style={{padding:'2rem',fontFamily:'sans-serif'}}>
      <h1>Letter Counter</h1>
      <textarea 
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type something here..."/>
      <h2> Count: {letterCount}</h2>
    </div>  
  ) 
}
export default App