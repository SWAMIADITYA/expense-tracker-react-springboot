import {useRef, useState } from 'react';
import '../../../assets/styles/register.css';
import '../../../assets/styles/login-enhanced.css';
import { Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import AuthService from '../../../services/auth.service';
import Logo from '../../../components/utils/Logo';

function Register() {

    const navigate = useNavigate();

    const {register, handleSubmit, watch, formState} = useForm();
    const password = useRef({});
    password.current = watch('password', "");

    const [response_error, setResponseError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (data) => {
        setIsLoading(true)        
        await AuthService.register_req(data.username, data.email, data.password).then(
            (response) => {
                console.log(response);
                if (response.data.status === "SUCCESS"){
                    setResponseError("");
                    navigate(`/auth/userRegistrationVerfication/${data.email}`);
                }
                else {
                    setResponseError("Registration failed: Something went wrong!")
                }
            },
            (error) => {
                if (error.response) {
                    const resMessage = error.response.data.response
                    setResponseError(resMessage);
                    console.log(error.response.data);
                }else {
                    setResponseError("Registration failed: Something went wrong!")
                }
                
            }
          );
        setIsLoading(false);
    }

    return(
        <div className='container login-bg'>
            <div className="login-glass-card">
                <form className="auth-form login-form-enhanced"  onSubmit={handleSubmit(onSubmit)}>
                    <Logo/>
                    <h2 className="login-title">Create Your Account</h2>
                    {
                        (response_error!=="") && <p>{response_error}</p>
                    }
                    <div className='input-box'>
                        <label>Username</label><br/>
                        <input 
                            type='text'
                            placeholder="Choose a username"
                            {...register('username', {
                                required: "Username is required!"
                            })}
                        />
                        {formState.errors.username && <small>{formState.errors.username.message}</small>}
                    </div>
                    <div className='input-box'>
                        <label>Email</label><br/>
                        <input 
                            type='text'
                            placeholder="Enter your email"
                            {...register('email', {
                                required: "Email is required!",
                                pattern: {value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Invalid email address!"}
                            })}
                        />
                        {formState.errors.email && <small>{formState.errors.email.message}</small>}
                    </div>
                    <div className='input-box'>
                        <label>Password</label><br/>
                        <input 
                            type='password'
                            placeholder="Create a password"
                            {
                                ...register('password', {
                                    required: 'Password is required!',
                                    minLength: {
                                        value:8,
                                        message: "Password must have atleast 8 characters"
                                    }
                                })
                            }
                        />
                        {formState.errors.password && <small>{formState.errors.password.message}</small>}
                    </div>
                    <div className='input-box'>
                        <label>Confirm Password</label><br/>
                        <input 
                            type='password'
                            placeholder="Re-enter your password"
                            {
                                ...register('cpassword', {
                                    required: 'Confirm password is required!',
                                    minLength: {
                                        value:8,
                                        message: "Password must have atleast 8 characters"
                                    },
                                    validate: cpass => cpass === password.current || "Passwords do not match!"
                                })
                            }
                        />
                        {formState.errors.cpassword && <small>{formState.errors.cpassword.message}</small>}
                    </div>
                    <div className='input-box'>
                        <input type='submit' value={isLoading ? "Please wait" : 'Register'}
                        className={isLoading ? "button button-fill loading login-btn-enhanced" : "button button-fill login-btn-enhanced"}
                        />
                    </div>
                    <div className='msg'>By clicking Register, you agree to our user agreement, privacy policy, and cookie policy.</div>
                    <div className='msg'>Already a member? <Link to='/auth/login'  className='inline-link'>Login Here</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Register;