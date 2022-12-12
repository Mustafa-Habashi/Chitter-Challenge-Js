import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const SignUpPage = () => {

    const navigate = useNavigate()

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
            res.data.message = 'Registration Successful'
            alert(res.data.message)



            setCreateUser({
                name: ``,
                userName: ``,
                email: ``,
                password: ``

            })

            navigate('/login')

            return;
        }
        alert('Invalid input')



    }


    return (
        <div style={{ padding: '10px' }}>





            <form style={{ width: '50rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={signUp} >
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
                </div>

                <button type="submit" class="btn btn-primary" style={{ marginTop: '10px' }}>Submit</button>
            </form>



        </div>
    )
}

export default SignUpPage