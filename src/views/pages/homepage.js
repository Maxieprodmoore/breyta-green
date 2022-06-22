import {SlButton} from '@shoelace-style/shoelace/dist/react';
import  Link from 'react-router-dom';

const Home = () => {
    return (  
        <div className="page">
            Good morning, name! Let's do our part in protecting the environment!
            <h2>Become a <span>G</span>uardian of <span>M</span>other <span>N</span>ature!</h2>

            <div className="catagory">
                <h3>Recycling</h3>
                <Link to="reductionreaper/*"><SlButton>Become a Reduction Reaper!</SlButton></Link>
                <Link to="reusinggenie/*"><SlButton>Become a Reusing Genie!</SlButton></Link>
                <Link to="recyclingadvocator/*"><SlButton>Become a Recycling Advocator!</SlButton></Link>
            </div>
            <Link to="materials/*"><SlButton>Materials</SlButton></Link>

            <div className="catagory">
                <h3>Community</h3>
                <Link to="ranking/*"><SlButton>Ranking & Rewards</SlButton></Link>
                <Link to="guardianbase/*"><SlButton>Buardian Base!</SlButton></Link>
                <Link to="events/*"><SlButton>Events/Promotions</SlButton></Link>
            </div>
        </div>
    );
}
 
export default Home;