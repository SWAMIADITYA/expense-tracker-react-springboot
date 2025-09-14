import {useEffect, useState} from 'react';
import '../../../assets/styles/register.css';
import '../../../assets/styles/login-enhanced.css';
import {useForm} from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import Logo from '../../../components/utils/Logo';

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        if (AuthService.getCurrentUser() && AuthService.getCurrentUser().roles.includes("ROLE_USER")) {
            navigate("/user/dashboard");
        }else if (AuthService.getCurrentUser() && AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")) {
            navigate("/admin/transactions");
        }
    }, [])


    const {register, handleSubmit,formState} = useForm();

    const [response_error, setResponseError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true)        
        await AuthService.login_req(data.email, data.password).then(
            () => {
                setResponseError("");

                setTimeout(() => {
                    if (AuthService.getCurrentUser().roles.includes("ROLE_USER")) {
                        navigate("/user/dashboard");
                    }else if (AuthService.getCurrentUser().roles.includes("ROLE_ADMIN")) {
                        navigate("/admin/transactions");
                    }
                }, 5000)
                localStorage.setItem("message", JSON.stringify({ status: "SUCCESS", text: "Login successfull!" }))
            },
            (error) => {
                const resMessage =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                console.log(resMessage);
                if (resMessage === "Bad credentials"){
                    setResponseError("Invalid email or password!");
                }else {
                    setResponseError("Something went wrong: Try again later!");
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
                    <h2 className="login-title">Sign in to MyWallet</h2>
                    {
                        (response_error!=="") && <p>{response_error}</p>
                    }
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
                            placeholder="Enter your password"
                            {
                                ...register('password', {
                                    required: 'Password is required!'
                                })
                            }
                        />
                        {formState.errors.password && <small>{formState.errors.password.message}</small>}
                    </div>
                    <div className='msg'> <Link to={'/auth/forgetpassword/verifyEmail'} className='inline-link'>Forgot password?</Link></div>
                    <div className='input-box'>
                        <input type='submit' value={isLoading ? "Logging in..." : 'Login'}
                            className={isLoading ? "button button-fill loading login-btn-enhanced" : "button button-fill login-btn-enhanced"}
                        />
                    </div>
                    <div className='msg'>New member? <Link to='/auth/register' className='inline-link'>Register Here</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Login;