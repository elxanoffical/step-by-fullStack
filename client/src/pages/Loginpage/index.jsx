import React from 'react'
import './style.scss'
import horizon from '../../assets/images/horizon.svg'
import google from '../../assets/images/google.png'
import horizonlogo from '../../assets/images/HorizonLogo.svg'

const Loginpage = () => {
  return (
    <div className='container'>

      <div className="loginPage">
        <form className='login-form'>

          <div className="header">
            <h1>Sign In</h1>
            <p>Enter your email and password to sign in!</p>
          </div>

          <div className="google">
            <img src={google} alt="" />
            <span>Sign in with Google</span>
          </div>

          <div className="liner">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>

          <div className="inpt-box">
            <h1>Email<span>*</span></h1>
            <input type="text" placeholder='email' />
          </div>

          <div className="inpt-box">
            <h1>Password<span>*</span></h1>
            <input type="password" placeholder='password' />
          </div>

          <div className="check-box">
            <div className="checkbox">
              <input type="checkbox" />
              <span>Keep me logged in</span>
            </div>
            <div className="forgetPass">
              <span>Forget password?</span>
            </div>
          </div>

          <div className="btn">
          <button>Sign In</button>
          </div>

          <p>Not registered yet? <span>Create an Account</span></p>

        </form>

        <div className="footer">
            <div className="tag">
              <span>© 2022 Horizon UI. All Rights Reserved.
                Made with love by Simmmple!</span>
            </div>
            <div className="tag">
              <span>Marketplace</span>
              <span>License</span>
              <span>Terms of Use</span>
              <span>Blog</span>
            </div>
          </div>
      </div>

     


      <div className="img">
        <img src={horizon} alt="" />
      </div>

     

    </div>
  )
}

export default Loginpage