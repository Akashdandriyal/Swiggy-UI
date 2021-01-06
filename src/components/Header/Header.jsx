import React, {useState} from 'react'
import Slide from '@material-ui/core/Slide';
import './Header.css';
import LoginSignup from '../forms/LoginSignup';

//pictures
import swiggyLogo from '../../images/swiggyLogo.png';

const Header = (props) => {

    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [visible, setVisible] = useState(false);

    const changeLoginState = () => {
        setLogin(!login);
        setVisible(!visible);
        if(signup === true) {
            setSignup(false);
        }
    }

    const changeSignupState = () => {
        setSignup(!signup);
        setVisible(!visible);
        if(login === true) {
            setLogin(false);
        }
    }

    const changeVisibility = () => {
        setVisible(!visible);
        if(visible === true) {
            setLogin(false);
            setSignup(false);
        }
    }

    const changeForm = () => {
        setSignup(!signup);
        setLogin(!login);
    }

    return (
        <header className="header">
            <div className="headerLogo">
                <img src={swiggyLogo} alt="Swiggy logo" />
            </div>
            <div className="headerLinks">
                <button onClick={changeLoginState} className="loginButton">Login</button>
                <button onClick={changeSignupState} className="signupButton">Sign up</button>
            </div>
            <Slide direction="left" in={visible} mountOnEnter unmountOnExit>
                <div className="loginSignup">
                   {
                       login ? <LoginSignup title="Login" changeVisibility={changeVisibility} changeForm={changeForm} />
                        : (signup && <LoginSignup title="Sign up" changeVisibility={changeVisibility} changeForm={changeForm} />)
                   }
                </div>
            </Slide>
        </header>
    )
}

export default Header
