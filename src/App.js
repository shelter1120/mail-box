import AuthForm from "./components/Login/AuthForm";
import WelcomePage from "./components/Pages/Welcomepages";
import { Route } from "react-router-dom";
import AuthPage from "./components/Pages/AuthPage";
import Mailfirst from "./components/Mail/ComposeMail";
import Inbox from "./components/Mail/Inbox";

function App() {
  return (
      <main>
      <h1>MailBox</h1>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Route path="/inbox" exact>
     <Inbox />
      </Route>
      <Route path="/mail">
        <Mailfirst/>
      </Route>
    </main>
    
  )
}

export default App;
