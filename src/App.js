import { Routes, Route } from "react-router-dom"
import Start from "./pages/Start/Start"
import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/Signup"

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHashtag, faLock, faLockOpen, faPaperPlane, faPen } from '@fortawesome/free-solid-svg-icons'
library.add(faLock, faLockOpen, faPen, faPaperPlane, faHashtag);


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start/>}> </Route>
        <Route path="/Main" element={<Main />}></Route> 
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
