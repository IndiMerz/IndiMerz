// import { Login } from "./components/Login";

// const isLoggedIN = false;

// function App() {
//   return (
//     <div>
//     {isLoggedIN ? <h1>Hello User</h1> : <Login />}
//     </div>
//   )
// }




// Login/Register Display Challenge
import { Form } from "./components/Form";
const userRegistered = true

function App() {
  return (
    <div>
    <Form 
      isRegistered={userRegistered}
    />
    </div>
  )
}


export default App