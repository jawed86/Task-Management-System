import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextProvider'

const AllTask = () => {
    const { userData } = useContext(AuthContext);


    return (<>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th scope='col'>Employee Name</th>
                    <th scope='col'>New Task</th>
                    <th scope='col'>Active Task</th>
                    <th scope='col'>Completed</th>
                    <th scope='col'>Failed</th>
                </tr>
            </thead>
            <tbody>
                {userData.employeeData.map(item =>
                    <tr key={item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.taskCounts.newTask}</td>
                        <td>{item.taskCounts.active}</td>
                        <td>{item.taskCounts.completed}</td>
                        <td>{item.taskCounts.failed}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>)
}

export default AllTask