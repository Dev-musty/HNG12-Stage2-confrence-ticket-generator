import ticzVector from '../assets/vector.svg';
import ticzLogo from '../assets/ticz.svg';
import { Link } from 'react-router-dom';
function NavBar(){
 return (
    <>
      <header className='header'>
        <div className="logo">
          <img src={ticzVector} alt="tirz-vector-img"/>
          <img src={ticzLogo} alt="ticz-logo"/>
        </div>
        <nav>
          <ul className='nav-list'>
            <Link to= '/'>Event</Link>
            <Link to= '/'>My Tickets</Link>
            <Link to= '/about'>About Project</Link>
          </ul>
        </nav>
        <a href="#" className='link'>MY TICKETS <i className="fa-solid fa-arrow-right"></i></a>
      </header>
    </>
  );
}
export default NavBar;