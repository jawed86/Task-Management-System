import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/ContextProvider'

const TaskList = ({ logedData }) => {
    const { userData, setCompletedTaskHover, setNewTaskHover, setAcceptedTaskHover, setFailedTaskHover } = useContext(AuthContext);

    const [mapedTaskCount, setMappedTaskCount] = useState('');


    useEffect(() => {
        const foundUser = userData.employeeData.find(elem => logedData.firstName === elem.firstName);
        if (foundUser) {
            setMappedTaskCount(foundUser.taskCounts);
        }
    }, [userData, logedData]);


    return (
        <>
            <div className="col-lg-3 col-6">
                <div className="rounded-4 px-3 py-4 lh-1 d-flex flex-column justify-content-between text-break" style={{ backgroundColor: 'var(--newTask)', height: '100%', }}
                    onMouseEnter={() => setNewTaskHover(true)}
                    onMouseLeave={() => setNewTaskHover(false)}
                >
                    <p className='fs-1 my-1 fw-bolder'>{mapedTaskCount.newTask}</p>
                    <p className='fs-3 my-1'>New Task</p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className="rounded-4 px-3 py-4 lh-1 d-flex flex-column justify-content-between text-break" style={{ backgroundColor: 'var(--completed)', height: '100%' }}
                    onMouseEnter={() => setCompletedTaskHover(true)}
                    onMouseLeave={() => setCompletedTaskHover(false)}
                >
                    <p className='fs-1 my-1 fw-bolder'>{mapedTaskCount.completed}</p>
                    <p className='fs-3 my-1'>completed task</p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className="rounded-4 px-3 py-4 lh-1 d-flex flex-column justify-content-between text-break" style={{ backgroundColor: 'var(--accepted)', height: '100%' }}
                    onMouseEnter={() => setAcceptedTaskHover(true)}
                    onMouseLeave={() => setAcceptedTaskHover(false)}
                >
                    <p className='fs-1 my-1 fw-bolder'>{mapedTaskCount.active}</p>
                    <p className='fs-3 my-1'>accepted task</p>
                </div>
            </div>
            <div className="col-lg-3 col-6">
                <div className=" rounded-4 px-3 py-4 lh-1 d-flex flex-column justify-content-between text-break" style={{ backgroundColor: 'var(--failed)', height: '100%' }}
                    onMouseEnter={() => setFailedTaskHover(true)}
                    onMouseLeave={() => setFailedTaskHover(false)}
                >
                    <p className='fs-1 my-1 fw-bolder'>{mapedTaskCount.failed}</p>
                    <p className='fs-3 my-1'>failed task</p>
                </div>
            </div>
        </>
    )
}

export default TaskList