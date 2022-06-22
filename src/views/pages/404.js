import Link from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="page">
            <h2>
                Page Not Found
            </h2>
            <p>Sorry! The page that you were looking for is not available.</p>
            <Link to='/'>Click here to return to the homepage!</Link>
        </div>
     );
}
 
export default NotFound;