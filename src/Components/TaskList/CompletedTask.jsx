import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextProvider'


const CompletedTask = ({ taskDate, taskTitle, taskDescription, category }) => {
    const { completedTaskHover, setCompletedTaskHover } = useContext(AuthContext);


    return (
        <div
            className={`col-8 col-md-3 p-3 rounded-3 d-flex flex-column justify-content-between text-break   
                tasks-shine ${completedTaskHover ? 'animate-shine' : ''}`}
                
            style={{
                backgroundColor: 'var(--completed)',
            }}
        >
            <div className='d-flex justify-content-between' style={{ fontSize: '14px', textAlign: 'center' }}>
                <p style={{ backgroundColor: 'rgb(38, 19, 19)', padding: '2px 10px', borderRadius: '5px' }}>{category}</p>
                <p>{taskDate}</p>
            </div>
            <h2 className='mt-5'>{taskTitle}</h2>
            <p>{taskDescription}</p>

            <div className='d-flex justify-content-center mt-3'>
                <div className="col-12 p-2 rounded-2 text-center" >Completed Task</div>
            </div>
        </div>
    )
}

export default CompletedTask