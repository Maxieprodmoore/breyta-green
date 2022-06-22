import {SlIconButton} from '@shoelace-style/shoelace/dist/react';
import BreytaIcon from './../../images/Breyta-Green-Icons/Breyta-Green-icon.png';
import Link from 'react-router-dom';

const NewAccount = () => {
    return ( 
        <div id="BreytaLogin">
            <div id="loginHeader">
                <SlIconButton name='arrow-left' label='back to login page' href='/login'></SlIconButton>
            </div>

            <form id="loginForm">
                <div className="BreytaIcon">
                    <img src={BreytaIcon} alt="Breyta Icon" />
                    <h2><span className="BreytaHighlight">B</span>reyta</h2>
                </div>
                <div className="formEntry">
                    <div className="formDetails">
                        <label for="name"> Full Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="formDetails">
                        <label for="email"> Email Address:</label>
                        <input type="email" id="email" name="email" /> 
                    </div>
                    <div className="formDetails">
                        <label for="pwd"> Password:</label>
                        <input type="password" id="pwd" name="pwd" /> 
                    </div>
                    <div className="formDetails">
                        <label for="pwd"> Confirm Password:</label>
                        <input type="password" id="confpwd" name="pwd" />
                    </div>
                    <input type="submit" value="Create Account"></input>
                </div>
                <Link to="/login">Already have an account?</Link>
            </form>
        </div> 
        
    );
}
 
export default NewAccount;