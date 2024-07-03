import { useContext } from "react"
import { UserContext } from "z-library-a"

function AnotherComponent() {
    const user = useContext(UserContext);
  return (
    <div>AnotherComponent SPA {user}</div>
  )
}

export default AnotherComponent