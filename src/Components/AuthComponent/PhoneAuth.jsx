import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';

import { useHistory } from 'react-router-dom';
import firebase from './../../firebase';
const PhoneAuth = () => {
    let history = useHistory();
    let [state, setState] = useState({
        loading: false,
        phone:"",
    })
    let { loading, phone } = state;
    let handleChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    let handleSubmit = async e => {
        e.preventDefault();
        try {
            setState({ loading: true });
            let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
                'recaptcha-container'
            )
            let ConfirmationMessage = await firebase.auth().signInWithPhoneNumber(phone, recaptchaContainer);
            let code = window.prompt('enter otp');
            ConfirmationMessage.confirm(code);
            toast.success('successfully logged');
            history.push('/userhome/profile');
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
      <section id="authBlock">
        <article>
          <div className="authcontent">
            <h1 style={{textAlign:'center'}}>Enter phone number</h1>
           
          </div>
          <div className="formContent">
            <div className="addForm">
              <form onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="password_reset">
                   Enter Phone number
                  </label>
                                <input type="tel" placeholder='Phone nummber' onChange={handleChange} value={ phone} name=
                                    'phone'
                                 />
                            </div>
                            
                            <div id="recaptcha-container"></div>
                <div className="form-group btn-group">
                  <button>Send</button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
}

export default PhoneAuth
