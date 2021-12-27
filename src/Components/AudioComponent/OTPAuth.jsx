import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Pages/HeaderComponent/Logo'

const OTPAuth = () => {
    return (
      <section>
        <article>
          <div>
            <Logo />
          </div>
          <form>
            <div className="form-group">
              <h2>Enter your code</h2>
              <input
                type="text"
                className="form-control"
                placeholder="6-digit code"
                name=""
                required
              />
            </div>
            <span>
                        <Link to="">Get a new code</Link>
                        <button>Next</button>
                    </span>
                    <div>
                        
                    </div>
          </form>
        </article>
      </section>
    );
}

export default OTPAuth
