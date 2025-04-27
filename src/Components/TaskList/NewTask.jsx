import { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';


const NewTask = ({ taskDate, taskTitle, taskDescription, category, firstName, id }) => {
  const { setPageRefresh, userData, newTaskHover } = useContext(AuthContext);

  // console.log(userData.employeeData);

  function handleAcceptTask() {
    const updatedUserData = userData.employeeData.map(elem => {
      if (elem.firstName === firstName) {
        const updatedTasks = elem.tasks.map(task => {
          if (task.taskTitle === taskTitle && task.taskDescription === taskDescription && task.newTask === true && task.active === false) {
            return {
              ...task,
              newTask: false,
              active: true,
            };
          }
          return task;
        });

        return {
          ...elem,
          tasks: updatedTasks,
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask - 1,
            active: elem.taskCounts.active + 1,
          }
        };
      }
      return elem;
    });


    localStorage.setItem('employees', JSON.stringify(updatedUserData));
    // setUserData({ employeeData: updatedUserData });

    alert("Task accepted!");

    setPageRefresh(p => p + 1)
  }


  return (
    <div className={`col-8 col-md-3 p-3 rounded-3 d-flex flex-column justify-content-between text-break tasks-shine ${newTaskHover && 'animate-shine'} `}
    style={{backgroundColor : 'var(--newTask)'}}
    >
      <div className='d-flex justify-content-between' style={{ fontSize: '14px', textAlign: 'center' }}>
        <p style={{ backgroundColor: 'rgb(38, 19, 19)', padding: '2px 10px', borderRadius: '5px' }}>{category}</p>
        <p>{taskDate}</p>
      </div>
      <h2 className='mt-5'>{taskTitle}</h2>
      <p>{taskDescription}</p>


      <div className='d-flex justify-content-center mt-3'>
        <button className="btn btn-secondary col-12" onClick={handleAcceptTask} >Accept Task</button>
      </div>

    </div>
  )
}

export default NewTask