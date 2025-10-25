// RegisterPage.jsx
import Navbar from '../components/Navbar'
function RegisterPage() {
  return (
    <>
    <Navbar />
      <div className='d-flex-center'>
        <div className='login-box'>
          <form action="">
            <div style={{width:'100%'}}>
              <label for="username">Username</label>
              <input className='form-control' type="text" id='username' name='username' />
            </div>
            
            <div>
              <label for="password">Password</label>
              <input className='form-control' type="password" id='password' name='password' />
            </div>

            <div>
              <label for="rpassword">Repeat Password</label>
              <input className='form-control' type="password" id='rpassword' name='rpassword' />
            </div>

            <div>
              <label for="fullname">Full Name</label>
              <input className='form-control' type="text" id='fullname' name='fullname' />
            </div>

            <div>
              <label for="phone">Phone</label>
              <input className='form-control' type="text" id='phone' name='phone' />
            </div>

            <button className='btn btn-blue' type="submit">Register</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default RegisterPage