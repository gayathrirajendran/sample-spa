import './App.css'
import { Component1 } from 'z-library-a'
import AnotherComponent from './AnotherComponent'
import { ComponentB, ComponentC } from 'z-library-b'

function App() {

  return (
    <Component1>
      <div>Hello SPA</div>
      <AnotherComponent/>
      <ComponentB />
      <ComponentC />
    </Component1>
  )
}

export default App
