import ticzVector from '../assets/vector.svg';
import ticzLogo from '../assets/ticz.svg';
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
            <li><a href="#">Home</a></li>
            <li><a href="#">My Ticket</a></li>
            <li><a href="#">About Project</a></li>
          </ul>
        </nav>
        <a href="#" className='link'>MY TICKETS <i className="fa-solid fa-arrow-right"></i></a>
      </header>
    </>
  );
}
export default NavBar;