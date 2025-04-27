import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/ContextProvider';


const CreateTask = () => {
    const { setPageRefresh, userData } = useContext(AuthContext);

    const [employeeInput, setEmployeeInput] = useState({
        taskTitle: '',
        taskDate: '',
        assignTo: '',
        category: '',
        taskDescription: '',
    })
    
    let matchFound = false;

    function takeInput(event) {
        const { name, value } = event.target;
        setEmployeeInput(preValue => ({
            ...preValue,
            [name]: value,
        })
        )
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const taskToAdd = {
            ...employeeInput,
            active: false,
            newTask: true,
            failed: false,
            completed: false,

        }


        const updatedUserData = userData.employeeData.map((elem) => {
            if (elem.firstName.toLowerCase() === employeeInput.assignTo.toLowerCase()) {
                const updatedTasks = [...elem.tasks, taskToAdd,];
                matchFound = true;

                return {
                    ...elem,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1,
                    }
                };
            }

            return elem;
        });

        if (matchFound) {
            localStorage.setItem('employees', JSON.stringify(updatedUserData));
            alert("Task assigned successfully!");

            setEmployeeInput({
                taskTitle: '',
                taskDate: '',
                assignTo: '',
                category: '',
                taskDescription: '',
            });

            setPageRefresh(pre => pre + 1);
        } else {
            alert('Please assign the task to one of the following valid employees: Arjun, Sneha, Ravi, Priya, or Karan');
        }

    }

    return (
        <>
            <form className='col d-flex justify-content-between' style={{ flexWrap: 'wrap', rowGap: '20px' }}
                onSubmit={submitHandler}
            >
                <div className='box1 col-lg-5 col-12 d-flex flex-column justify-content-between'>
                    <div>
                        <h3>Task Title</h3>
                        <input type="text" placeholder='make a ui design'
                            name='taskTitle'
                            value={employeeInput.taskTitle}
                            onChange={takeInput}
                            required
                        />
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input type="date"
                            name='taskDate'
                            value={employeeInput.taskDate}
                            onChange={takeInput}
                            required
                        />
                    </div>
                    <div>
                        <h3>Assign to</h3>
                        <input type="text" placeholder='employee name'
                            name='assignTo'
                            value={employeeInput.assignTo}
                            onChange={takeInput}
                            required
                        />
                    </div>
                    <div style={{ margin: '0' }}>
                        <h3>Category</h3>
                        <input style={{ margin: '0' }} type="text" placeholder='design, dev, etc'
                            name='category'
                            value={employeeInput.category}
                            onChange={takeInput}
                            required
                        />
                    </div>
                </div>

                <div className='box2 col-lg-5 col-12 d-flex flex-column justify-content-between'>
                    <h3>Description</h3>
                    <textarea name="taskDescription" id="" cols={30} rows={10}
                        value={employeeInput.taskDescription}
                        onChange={takeInput}
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-success mt-4 fs-5">create task</button>
                </div>

            </form>
        </>
    )
}

export default CreateTask