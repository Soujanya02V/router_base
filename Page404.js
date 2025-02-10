import {Link} from 'react-router-dom'
function Page404(){
    return<>
    <h1>error 404</h1>
    <p>cannot find the page</p>
    <Link to="/about"> go to About</Link>
  <br></br>
  <Link to="/home">go to Home</Link>
  <br></br>
  <Link to="/help">go to Help</Link>
  <br></br>
  <Link to="/contact"> go to Contact</Link>
    </>
}
export default Page404