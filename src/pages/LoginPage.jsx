
import Navbar from '../components/Navbar'

function LoginPage() {
  return (
    <>
      <Navbar />
        <div className='d-flex-center'>
          <div className='login-box'> 
            <form action="">
              <label for="username">Username</label>
              <input className='form-control' type="text" id="username"/>
              
              <label for="password">Password</label>
              <input className='form-control' type="password" id="password"/>

              <button>Submit</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default LoginPage