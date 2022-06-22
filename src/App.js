import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/header';
import Footer from './components/footer';
import About from './views/pages/about';
import Events from './views/pages/events';
import GuardianBase from './views/pages';
import Home from './views/pages/homepage';
import LogIn from './views/pages/login';
import Materials from './views/pages/materials';
import NewAccount from './views/pages/newAccount';
import RecyclingAdvocator from './views/pages/recyclingAdvocator';
import ReductionReaper from './views/pages/reductionReaper';
import ReusingGenie from './views/pages/reusingGenie';
import Settings from './views/pages/settings';
import UserAccount from './views/pages/userAccount';


function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="content">
          <Router>
            <Routes>
              <Route path='/' element={< Home />}></Route>
              <Route path='login/*' element={< LogIn />}></Route>
              <Route path='about/*' element={< About />}></Route>
              <Route path='events/*' element={< Events />}></Route>
              <Route path='guardianbase/*' element={< GuardianBase />}></Route>
              <Route path='materials/*' element={< Materials />}></Route>
              <Route path='newaccount/*' element={< NewAccount />}></Route>
              <Route path='recyclingadvocator/*' element={< RecyclingAdvocator />}></Route>
              <Route path='reductionreaper/*' element={< ReductionReaper />}></Route>
              <Route path='reusinggenie/*' element={< ReusingGenie />}></Route>
              <Route path='settings/*' element={< Settings />}></Route>
              <Route path='useraccount/' element={< UserAccount />}></Route>
            </Routes>
          </Router>
                                        
        </div>
      <Footer />
    </div>
  );
}

export default App;
