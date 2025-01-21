// import { useState } from 'react'
import { Form } from "./components/Form.jsx"
import { Preview } from "./components/Preview.jsx"

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Form></Form>
      </div>
      <div className="preview">
        <Preview></Preview>
      </div>
    </>
  )
}
