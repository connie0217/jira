import { useAuth } from "./context/auth-context";
import {UnauthenticatedApp} from "./unauthenticated-app";
import {AuthenticatedApp} from "./AuthenticatedApp";
import { ErrorBoundary } from "./component/ErrorBoundary";
import { FullPageError } from "./lib";
import { useDocTitle } from "./utils/useDocTitle";

function View() {
  const {user} = useAuth()
  return <div>
    <ErrorBoundary fallbackRender={FullPageError}>
      {user? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </ErrorBoundary>
  </div>
}
export default View