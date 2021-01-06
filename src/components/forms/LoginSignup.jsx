import React, { useReducer, useState } from 'react'
import './LoginSignup.css';
import CloseIcon from '@material-ui/icons/Close';

//Picture
import headerImage from '../../images/taco.png';

const LoginSignup = (props) => {

    const initialState = {
        mobile: "",
        name: "",
        email: "",
        password: ""
    };

    // const isValid = {
    //     mobile: true,
    //     name: true,
    //     email: true,
    //     password: true
    // }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'mobile':
                if(Number(action.payload)) { 
                    return {...state,mobile: action.payload};
                } else {
                    return state;
                }
            case 'name': 
                return {...state,name: action.payload};
            case 'email': 
                return {...state,email: action.payload};
            case 'password': 
                return {...state,password: action.payload};
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const checkValidity = (input) => {
        console.log(input)
        switch(input.type) {
            case 'mobile':
                if(input.value.length > 0 && input.value.length < 10){
                    setValidity({...isValid, mobile: false});
                    console.log(isValid.mobile);
                } else {
                    setValidity({...isValid, mobile: true});
                }
                break;
            case 'email':
                if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(input.value) === false && input.value.length > 0) {
                    setValidity({...isValid, email: false});
                } else {
                    setValidity({...isValid, email: true});
                }
                break;
            case 'password':
                if(input.value.length > 0 && input.value.length < 6){
                    setValidity({...isValid, password: false});
                } else {
                    setValidity({...isValid, password: true});
                }
                break;
            default:
                throw new Error();
        }
    }

    const [isValid, setValidity] = useState({
        mobile: true,
        name: true,
        email: true,
        password: true
    });

    const [showPassword, setPasswordVisibility] = useState(false);

    return (
        <div className="loginSignup--container">
            <div onClick={props.changeVisibility} className="loginSignup--containerBlank">

            </div>
            <div className="loginSignup--containerContent">
                <div className="loginSignup--containerContentHeader">
                    <span onClick={props.changeVisibility} className="closeIcon" ><CloseIcon /></span>
                    <h2 >{props.title}</h2>
                    <div className="loginOrSignup">
                        or <button onClick={props.changeForm} >{props.title === "Login" ? "create an account" : "login to your account"}</button>
                        <hr />
                    </div>
                    <img src={headerImage} alt="" />
                </div>
                { props.title === "Login" ?
                    <form>
                        <div className="formField">
                            <input 
                                type="text"
                                name="mobile" 
                                onChange={(event) => {
                                    console.log(state);
                                    dispatch({
                                        type: 'mobile',
                                        payload: event.target.value
                                    })
                                    setValidity({...isValid, mobile: true})
                                } } 
                                onBlur={() => checkValidity({
                                    type: "mobile",
                                    value: state.mobile
                                })}
                                value={state.mobile || ''} 
                                maxLength="10"
                                autoComplete="off" 
                            />
                            <label className={`${state.mobile.length > 0 && "formFieldLabel"} ${isValid.mobile === false ? "invalid" : null}`} htmlFor="mobile" >{isValid.mobile ? "Phone number" : "Enter your phone number"}</label>
                        </div>
                        <button className="loginSignupButton">LOGIN</button>
                    </form>
                :
                    <form>
                        <div className="formField">
                            <input 
                                type="text"
                                name="mobile" 
                                onChange={(event) => {
                                    console.log(state);
                                    dispatch({
                                        type: 'mobile',
                                        payload: event.target.value
                                    })
                                    setValidity({...isValid, mobile: true})
                                } } 
                                onBlur={() => checkValidity({
                                    type: "mobile",
                                    value: state.mobile
                                })}
                                value={state.mobile || ''} 
                                maxLength="10"
                                autoComplete="off" 
                            />
                            <label className={`${state.mobile.length > 0 && "formFieldLabel"} ${isValid.mobile === false ? "invalid" : null}`} htmlFor="mobile" >{isValid.mobile ? "Phone number" : "Enter your phone number"}</label>
                        </div>
                        <div className="formField">
                            <input 
                                type="text"
                                name="name" 
                                onChange={(event) => {
                                    console.log(state);
                                    dispatch({
                                        type: 'name',
                                        payload: event.target.value
                                    })
                                } }
                                value={state.name || ''} 
                                autoComplete="off" 
                            />
                            <label className={`${state.name.length > 0 && "formFieldLabel"}`} htmlFor="name" >Name</label>
                        </div>
                        <div className="formField">
                            <input 
                                type="email"
                                name="email" 
                                onChange={(event) => {
                                    console.log(state);
                                    dispatch({
                                        type: 'email',
                                        payload: event.target.value
                                    })
                                    setValidity({...isValid, email: true})
                                } } 
                                onBlur={() => checkValidity({
                                    type: "email",
                                    value: state.email
                                })}
                                value={state.email || ''} 
                                autoComplete="off" 
                            />
                            <label className={`${state.email.length > 0 && "formFieldLabel"} ${isValid.email === false ? "invalid" : null}`} htmlFor="email" >{isValid.email ? "Email" : "Invalid email address"}</label>
                        </div>
                        <div className="formField">
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="password" 
                                onChange={(event) => {
                                    console.log(state);
                                    dispatch({
                                        type: 'password',
                                        payload: event.target.value
                                    })
                                    setValidity({...isValid, password: true})
                                } } 
                                onBlur={() => checkValidity({
                                    type: "password",
                                    value: state.password
                                })}
                                value={state.password || ''} 
                                autoComplete="off" 
                            />
                            {
                                state.password.length > 0 && <div className="showPassword" onClick={() => setPasswordVisibility(!showPassword)} >{showPassword ? "Hide" : "Show"}</div>
                            }
                            <label className={`${state.password.length > 0 && "formFieldLabel"} ${isValid.password === false ? "invalid" : null}`} htmlFor="mobile" >{isValid.password ? "Password" : "Password should be min 6 chars"}</label>
                        </div>
                        <button type="submit" className="loginSignupButton">CONTINUE</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default LoginSignup
