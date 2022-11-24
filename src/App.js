import Home_Body from './Home';
import Calculator from './Calculator';
import Opening_body from './Openingpage';
import LanguageHelp from './LanguageHelp';
import Login from './Login';
import SignUp from './SignUp';
import Otp from './Otp';
import FirstNav from './Destination'
import Map from './OfflineMap';
import Info from './Information';
import Review_Page from './Review_Page';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path ="/home" element={<Home_Body/>}/>
      <Route path ="/calculator" element={<Calculator/>}/>
      <Route path ="/" element={<Opening_body/>}/>
      <Route path ="/language_help" element={<LanguageHelp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign_up" element={<SignUp/>}/>
      <Route path="/otp" element={<Otp/>}/>
      <Route path="destination" element={<FirstNav/>}/>
      <Route path="/map" element={<Map/>}/>
      <Route path="/information" element={<Info/>}/>
      <Route path="/review" element={<Review_Page/>}/>
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
  );
}

export default App;
