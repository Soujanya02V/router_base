
import { BrowserRouter,Routes,Route , Link} from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Help from './component/Help'
import Contact from './component/Contact'
import Page404 from './component/Page404';
function App(){
  return(
    <div className="App">
<BrowserRouter>
<Link to="/about">About</Link>
  <br></br>
  <Link to="/home">Home</Link>
  <br></br>
  <Link to="/help">Help</Link>
  <br></br>
  <Link to="/contact">Contact</Link>

<Routes>
 <Route path="*" element={<Page404/>}></Route>
<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/help" element={<Help/>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}
export default App;