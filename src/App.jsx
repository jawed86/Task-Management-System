import React, { useState, useEffect, useContext } from 'react'
import Login from './Components/Auth/Login'
import Admin from './Components/Dashboard/Admin';
import Employee from './Components/Dashboard/Employee';
import { AuthContext } from './Components/Context/ContextProvider';

const App = () => {
  // localStorage.clear()
  const [user, setUser] = useState(null);

  const [logedUserData, setlogedUserData] = useState(null)

  const { userData } = useContext(AuthContext);
  // console.log(userData);


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedData) {
      setUser(storedData.role)
      setlogedUserData(storedData.data)
    }
  }

    , [])



  function handlelogin(email, password) {

    if (userData.adminData.find(i => i.email == email && i.password == password)) {

      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))
      setUser('admin')
    }

    else {
      const employeeData = userData.employeeData.find(i => i.email == email && i.password == password);
      if (employeeData) {
        setlogedUserData(employeeData)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: employeeData }))
        setUser('employee')
      }
      else {
        alert('Invalid email or password')
      }
    }
  }

  return (
    <>
      {!user && <Login handlelogin={handlelogin} />}
      {user == 'admin' && <Admin setUser={setUser} />}
      {user == 'employee' && <Employee setUser={setUser} userData={logedUserData}
        setlogedUserData={setlogedUserData} />

      }

    </>
  )
}

export default App