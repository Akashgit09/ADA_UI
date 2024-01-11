import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import logo from "./involead logo svg.svg"


function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        // history("/home", { state: { id: email } })
                        history("/chatbot")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="bothbox">
            <div className="login">

                <img className="logo" src={logo} alt="logo" />

                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="submit" value="SignUp" onClick={submit} />

                </form>

                <p>OR</p>

                <Link to="/">Login Page</Link>

            </div>
            {/* added new code for making side div */}
            <div className="secondbox">
                <h1>
                    Join our comunity</h1>
            </div>
        </div>
    )
}

export default Signup;