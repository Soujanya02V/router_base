import {Link} from 'react-router-dom'
function Contact(){
    return<>
    <h1>Contact Page</h1>
    <Link to="/about"> go to About</Link>
  <br></br>
  <Link to="/home">go to Home</Link>
  <br></br>
  <Link to="/help">go to Help</Link>
  <br></br>
  <Link to="/contact"> go to Contact</Link>

    
    </>
}
export default Contact