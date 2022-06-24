import BreytaIcon from './../images/Breyta-Green-Icons/Breyta-Green-icon.png';
import { SlIconButton, SlDrawer } from '@shoelace-style/shoelace/dist/react';
import Link from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="navigation">
            <nav>
                <SlIconButton name='list' id='navigationSmartDev'/>

                <img src={BreytaIcon} alt="Breyta Icon" />

                <div id="navigationPC">
                    <Link to="/setting">Settings</Link>
                    <Link to="/userAccount">User Account</Link>
                    <Link to="/about">About this App</Link>
                    <Link to="/">Log Out</Link>
                </div>
            </nav>
            <SlDrawer>
                <Link to="/setting">Settings</Link>
                <Link to="/userAccount">User Account</Link>
                <Link to="/about">About this App</Link>
                <Link to="/">Log Out</Link>
            </SlDrawer>
        </div>
        
     );
}
 
export default Header;