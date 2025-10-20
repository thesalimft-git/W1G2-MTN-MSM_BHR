// LoginPage.jsx
// RegisterPage.jsx
// CardPage.jsx
// TicketPage.jsx
// AboutUsPage.jsx
// ContactUsPage.jsx

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


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


      <Footer />
    </>
  )
}

export default LoginPage