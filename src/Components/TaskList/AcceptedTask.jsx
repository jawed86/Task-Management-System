import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextProvider'

const AcceptedTask = ({ taskDate, taskTitle, taskDescription, category, firstName }) => {
    const { userData, setPageRefresh,acceptedTaskHover } = useContext(AuthContext);

    function handleComplete() {
        const updatedUserData = userData.employeeData.map(elem => {

            if (elem.firstName === firstName) {
                const updatedTask = elem.tasks.map(elem => {
                    if (elem.taskTitle === taskTitle && elem.taskDescription === taskDescription && elem.completed == false && elem.active == true) {
                        return {
                            ...elem,
                            completed: true,
                            active: false,
                        }
                    }
                    return elem;
                })

                return {
                    ...elem,
                    taskCounts: {
                        ...elem.taskCounts,
                        active: elem.taskCounts.active - 1,
                        completed: elem.taskCounts.completed + 1,
                    },
                    tasks: updatedTask
                }

            }
            return elem;
        })


        localStorage.setItem('employees',JSON.stringify(updatedUserData));
        setPageRefresh(p => p + 1)
    }

    function handleFailed() {
        const updatedUserData = userData.employeeData.map(elem => {
            if (elem.firstName === firstName) {
                const updatedTask = elem.tasks.map(elem => {
                    if (elem.taskTitle == taskTitle && elem.taskDescription == taskDescription && elem.failed == false && elem.completed == false) {
                        return {
                            ...elem,
                            active : false,
                            failed : true,
                        }
                    }
                    return elem;
                })

                return {
                    ...elem,
                    taskCounts : {
                        ...elem.taskCounts,
                        failed : elem.taskCounts.failed + 1,
                        active : elem.taskCounts.active - 1,
                    },
                    tasks : updatedTask
                }
            }
            return elem;
            
        })

        localStorage.setItem('employees',JSON.stringify(updatedUserData));
        setPageRefresh(p => p + 1);
    }


    return (
        <div className={`col-8 col-md-3 p-3 rounded-3 d-flex flex-column justify-content-between text-break tasks-shine ${acceptedTaskHover && 'animate-shine'}`}
        style={{backgroundColor : 'var(--accepted)'}}
        >
            <div className='d-flex justify-content-between' style={{ fontSize: '14px', textAlign: 'center' }}>
                <p style={{ backgroundColor: 'rgb(38, 19, 19)', padding: '2px 10px', borderRadius: '5px' }}>{category}</p>
                <p>{taskDate}</p>
            </div>
            <h2 className='mt-5'>{taskTitle}</h2>
            <p>{taskDescription}</p>

            <div className='d-flex justify-content-center  gap-2 mt-3'>
                <button className="btn btn-secondary col-6" onClick={handleComplete}>Mark as completed</button>
                <button className="btn btn-danger col-6" onClick={handleFailed}>Mark as failed</button>
            </div>

        </div>
    )
}

export default AcceptedTask