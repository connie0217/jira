import { useAuth } from "./context/auth-context";
import {UnauthenticatedApp} from "./unauthenticated-app";
import {AuthenticatedApp} from "./AuthenticatedApp";

function View() {
  const {user} = useAuth()
  return <div>
    {user? <AuthenticatedApp/> : <UnauthenticatedApp/>}
  </div>
}
export default View