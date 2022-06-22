import { SlButton, SlButtonGroup, SlIcon } from '@shoelace-style/shoelace/dist/react';

const Footer = () => {
    return (  
        <footer>
            <SlButtonGroup id='footerBtns'>
                <SlButton>
                    <div className="footerBtn">
                        <SlIcon name='house-door-fill'/>
                        Home
                    </div>
                </SlButton>
                <SlButton>
                    <div className="footerBtn">
                        <SlIcon name='cart-fill'/>
                        Cart
                    </div>
                </SlButton>
                <SlButton>
                    <div className="footerBtn">
                        <SlIcon name='envelope-fill'/>
                        Messages
                    </div>
                </SlButton>
            </SlButtonGroup>
        </footer>
    );
}
 
export default Footer;