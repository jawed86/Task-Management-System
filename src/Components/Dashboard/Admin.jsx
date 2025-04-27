import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const Admin = ({logedUserData,setUser}) => {


  return (
    <>
      <div className="container EmployeeAdminContainer my-4" >

        <div className="row mb-4">
          <Header setUser={setUser} />
        </div>

        <div className="row p-4" id='adminForm' style={{backgroundColor:'rgb(49, 44, 44)'}}>
          <CreateTask/>
        </div>

        <div className='row mt-5 d-flex flex-nowrap overflow-auto'>
          <AllTask/>
        </div>

      </div>
    </>
  )
}

export default Admin