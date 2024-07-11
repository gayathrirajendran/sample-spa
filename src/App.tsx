import './App.css'
import { accessTokenVar } from 'z-library-a'
import AnotherComponent from './AnotherComponent'
import { ComponentB } from 'z-library-b'
import { useReactiveVar } from '@apollo/client'

function App() {

  const app = useReactiveVar(accessTokenVar);

  return (
    <>
      <div>Hello SPA {JSON.stringify(app)}</div>

      {/* <UpdateButton /> */}
      <AnotherComponent/>
      <ComponentB />
    </>
  )
}

export default App
