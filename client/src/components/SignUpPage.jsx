import { useState } from "react"
import axios from 'axios'

const SignUpPage = () => {

    const [newUser, setCreateUser] = useState({
        name: ``,
        userName: ``,
        email: ``,
        password: ``

    })

    const handleChange = e => {
        const { name, value } = e.target;
        setCreateUser({

            ...newUser,
            [name]: value
        })
    }

    const signUp = async (e) => {
        e.preventDefault();

        const { name, userName, email, password } = newUser

        if (name && userName && email && password) {

            const res = await axios.post(`http://localhost:4000/register`, newUser)
            alert(res.data.message)


            setCreateUser({
                name: ``,
                userName: ``,
                email: ``,
                password: ``

            })
            return;
        }
        alert('Invalid input')



    }


    return (
        <div>





            <form style={{ width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={signUp} >
                <div class="form-floating mb-3"  >
                    <input type="name" class="form-control" id="floatingInput" placeholder="John Smith" name="name" value={newUser.name} onChange={handleChange}></input>
                    <label for="floatingInput">Full Name</label>
                </div>
                <div class="form-floating mb-3" >
                    <input type="username" class="form-control" id="floatingInput" placeholder="examlpe123" name="userName" value={newUser.userName} onChange={handleChange}></input>
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3" >
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={newUser.email} onChange={handleChange}></input>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating" >
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={newUser.password} onChange={handleChange}></input>
                    <label for="floatingPassword">Password</label>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text">
                            Must be 8-20 characters long.
                        </span>
                    </div></div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>



        </div>
    )
}

export default SignUpPage