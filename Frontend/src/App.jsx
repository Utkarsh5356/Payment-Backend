import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Signup} from "./Pages/SignUp"
import {Signin} from "./Pages/SignIn"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/signup" element={<Signup/>}></Route>
           <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
