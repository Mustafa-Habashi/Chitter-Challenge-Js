import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

function LoginPage({ setUser: setLoginUser }) {

    const getUsername = localStorage.getItem('username')

    const [user, setUser] = useState({
        email: ``,
        password: ``
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:4000/login`, user);
        const userData = jwt_decode(res.data.token)
        setLoginUser(userData);
        localStorage.setItem('username', userData.username)
        setUser({ email: ``, password: `` });
        setLoggedIn(userData ? true : false);
    }

    return (
        <div>
            {loggedIn && getUsername ? <Navigate to="/"></Navigate> :

                <form style={{ width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={login} >

                    <div class="form-floating mb-3" >
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={user.email} onChange={handleChange}></input>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating" >
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={user.password} onChange={handleChange}></input>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            }
        </div>
    )
}

export default LoginPage