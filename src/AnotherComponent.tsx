import { useContext } from "react"
import { UserContext, accessTokenVar, UpdateButton } from "z-library-a"
import { useReactiveVar } from "@apollo/client";

function AnotherComponent() {
    const user = useContext(UserContext);
    const accessTokenData = useReactiveVar(accessTokenVar);
  return (
    <div>
    <div>AnotherComponent SPA {user}</div>
    <div>
      <UpdateButton />
      <p>Access Token: {accessTokenData.accessToken}</p>
      <p>Role: {accessTokenData.claims.role}</p>
      <p>Sub: {accessTokenData.claims.sub}</p>
    </div>
    </div> 
  )
}

export default AnotherComponent