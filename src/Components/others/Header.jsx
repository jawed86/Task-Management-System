
const Header = ({ logedData,setUser }) => {

  const userName = logedData?.firstName || 'admin';

  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    setUser(null)
  }

  return (
    <div className='col d-flex justify-content-between align-items-end' >
      <h1 className='fs-3'>Hello, <br /> <span className='fs-2 fw-bold'>{userName}</span> </h1>
      <button type="button" className="btn btn-danger" onClick={handleLogout} >Log Out</button>
    </div>
  )
}

export default Header