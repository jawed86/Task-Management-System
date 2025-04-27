import React, { useState } from 'react'


const Login = ({ handlelogin }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handlelogin(email, pass)
        setEmail("")
        setPass("")
    }

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-9 col-xl-3 col-sm-6 col-md-5 col-lg-4" style={{
                    
                    borderRadius: '8px',
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%',
                        gap: '10px', padding: '10px',

                    }}>
                        <h2 style={{ margin: '10px 0 40px 0' }}>Sign in</h2>

                        <form
                            onSubmit={submitHandler}
                            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                className="loginInput"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                                required
                                autoComplete="username"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="loginInput"
                                onChange={(event) => setPass(event.target.value)}
                                value={pass}
                                required
                                autoComplete="current-password"
                            />
                            <button
                                type="submit"
                                style={{
                                    margin: "15px 0 20px  0",
                                    borderRadius: "50px",
                                    fontSize: "18px",
                                    textAlign: "center",
                                    border: "2px solid white",
                                    padding: "5px",
                                    backgroundColor: "var(--shadowEffect-child)",
                                    color: "white",
                                    cursor: "pointer",

                                }}
                            >
                                Login
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login