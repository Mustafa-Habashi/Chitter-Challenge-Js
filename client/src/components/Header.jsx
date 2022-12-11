import React from 'react'

function Header() {
    const isLoggedin = localStorage.getItem('username')

    const handleClick = () => {
        localStorage.clear()
    }


    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">ChitterChatter</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">My Profile</a>
                        </li>
                        <li class="nav-item">
                            {isLoggedin ? <a class="nav-link" href="/" onClick={handleClick}> Log Out</a> : <a class="nav-link" href="/login"> Login</a>}


                        </li>

                    </ul>

                </div>
            </nav></div>
    )
}

export default Header