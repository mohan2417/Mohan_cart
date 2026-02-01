 import { useState } from "react"
function Login() {
    const [email , setEmail] =useState("");
    const [password , setPassword] =useState("");
    const [message , setMessage] =useState("");

function Signin(){
        if(email == 'mohan@gmail.com' && password == '123'){
            setTimeout(() => {setMessage('Successfully LoggedIn!')},1000)
        }
      else {
        setTimeout(() => {
            setMessage('Invalid credential')
        },1000)
     }
    }
    return <div>
    <h1>login</h1>
    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
    <input type="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)}/><br/>
    <button  onClick={Signin}>Sign in</button>
    { message && <p>{message}</p>}
    </div>

}
export default Login
