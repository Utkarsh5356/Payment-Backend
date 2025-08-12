import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Signup} from "./Pages/SignUp"
import {Signin} from "./Pages/SignIn"
import { Dashboard } from "./Pages/Dashboard"
import { Sendmoney } from "./Pages/SendMoney"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/sendmoney" element={<Sendmoney/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
