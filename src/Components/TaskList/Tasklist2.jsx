import React, { useContext, useEffect, useState } from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../Context/ContextProvider'

const Tasklist2 = ({ logedData }) => {
    const { userData } = useContext(AuthContext);
    const [mapedData, setMapedData] = useState('');
    // console.log(userData.employeeData);

    useEffect(() => {
        const foundUser = userData.employeeData.find(elem => logedData.firstName === elem.firstName)
        if (foundUser) {
            setMapedData(foundUser)
        }

    }, [userData, logedData])

    if (!mapedData) return null;

    return (
        <>
            {mapedData.tasks.map((elem, index) => {
                if (elem.active) {
                    return (
                        <AcceptedTask
                            key={index}
                            taskDate={elem.taskDate}
                            taskTitle={elem.taskTitle}
                            taskDescription={elem.taskDescription}
                            category={elem.category}
                            firstName={mapedData.firstName}
                        />
                    );
                } else if (elem.newTask) {
                    return (
                        <NewTask
                            key={index}
                            taskDate={elem.taskDate}
                            taskTitle={elem.taskTitle}
                            taskDescription={elem.taskDescription}
                            category={elem.category}
                            firstName={mapedData.firstName}
                            logedData={logedData}
                        
                        />
                    );
                } else if (elem.completed) {
                    return (
                        <CompletedTask
                            key={index}
                            taskDate={elem.taskDate}
                            taskTitle={elem.taskTitle}
                            taskDescription={elem.taskDescription}
                            category={elem.category}
                            firstName={mapedData.firstName}
                        />
                    );
                } else if (elem.failed) {
                    return (
                        <FailedTask
                            key={index}
                            taskDate={elem.taskDate}
                            taskTitle={elem.taskTitle}
                            taskDescription={elem.taskDescription}
                            category={elem.category}
                            firstName={mapedData.firstName}
                        />
                    );
                }
                return null;
            })}
        </>
    )
}

export default Tasklist2