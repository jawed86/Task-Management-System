import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import Tasklist2 from '../TaskList/Tasklist2'
import { AuthContext } from '../Context/ContextProvider'

const Employee = ({ userData, setUser ,setlogedUserData}) => {
  const { pageRefresh } = useContext(AuthContext)

  return (<>
    <div className='container EmployeeAdminContainer my-4 '>
      <div className="row mb-5">
        <Header setUser={setUser} logedData={userData} />
      </div>


      <div className="row g-2 mb-3">
        <TaskList logedData={userData}  />
      </div>


      <div id='tasklist' className="row mt-5 d-flex gap-2 flex-nowrap overflow-auto">
        <Tasklist2 logedData={userData} setlogedUserData={setlogedUserData} />
      </div>

    </div>
  </>)
}

export default Employee