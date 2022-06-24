import { SlButton, SlIcon, SlDivider } from '@shoelace-style/shoelace/dist/react';
import Link from 'react-router-dom';

const LogIn = () => {
    return ( 
        <div className="loginForm">
            <div className="loginLogo">
                <img src="./../images/Breyta-Green-Icons/Breyta-Green-Icon.png" alt="Breyta Icon" />
                <h2><span className="breytaHighlight">B</span>reyta</h2>
            </div>

            <form id="login" autoComplete='on'>
                <div id="loginHelp">
                    <div className="formDetails">
                        <label for="email"> <SlIcon name="envelope-fill" /> Email Address:</label>
                        <input type="email" id="email" name="email" /> 
                    </div>
                    <div className="formDetails">
                        <label for="pwd"> <SlIcon name="envelope-fill" /> Password:</label>
                        <input type="password" id="pwd" name="pwd" /> 
                    </div>
                    <input type="submit" value="Sign In" id='signinBtn'></input>

                    <div id="socialsSI">
                        <SlButton size="large" circle>
                            <SlIcon name='facebook'/>
                        </SlButton> 
                        <SlButton size="large" circle>
                            <SlIcon name='twitter'/>
                        </SlButton> 
                        <SlButton size="large" circle>
                            <SlIcon name='google'/>
                        </SlButton> 
                    </div>
                    <Link to="/">Forgot your password? Click here!</Link>
                    <SlDivider/>
                </div>

                <SlButton id='newAccount'>Create New Account</SlButton>
                
            </form>
        </div>
        
     );
}
 
export default LogIn;