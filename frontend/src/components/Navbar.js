import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () =>{
    return(

<nav className="navbar navbar-expand-lg sticky-top border-bottom border-4 border-black nav-background ">
  <div className="container-fluid">
  <Link className="ms-2" to="/">
    <img className="loga" src="https://cdn.discordapp.com/attachments/903660417073680394/1168960385295061102/U__2_-removebg-preview.png?ex=6553aa32&is=65413532&hm=39aafc920ef5dab8712141e394567fd0b66cbd38be8629c8a844d3b9918271df&" alt="" />
    </Link>
    <Link className="navbar-brand " to="/">
        <div className='tra'>Utkarsh</div></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="vr ms-2 d-none d-lg-block"></div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center text-lg-start">
        <li className="nav-item me-4 ms-lg-2">
          <Link className="nav-link" aria-current="page" to="marketplace">Marketplace</Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link" to="subsidies">Subsidies</Link>
        </li>
        
        <li className="nav-item me-4">
          <Link className="nav-link" to="mentorship">Mentorship</Link>
        </li>
        
        <li className='nav-item me-4'>
            <Link className="nav-link" to="finance">Finance</Link>
        </li>
        <li className='nav-item me-4'>
            <Link className="nav-link" to="about">About</Link>
        </li>
        <li className='nav-item me-4 dropdown '>
        <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </Link>
          <ul class="dropdown-menu dropdown-menu-dark ">
            <li><Link class="dropdown-item" to="/sellerlogin">Seller</Link></li>
            <li><Link class="dropdown-item" to="/buyerlogin">User</Link></li>
          </ul>
            </li>
        
      </ul>
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start">
        <li className="nav-item me-4">
          <Link className="nav-link fon" aria-current="page" to="/">
            <img className='resibag ktt d-none d-lg-inline' src="https://cdn.discordapp.com/attachments/903660417073680394/1168980192765689938/pngwing.com.png?ex=6553bca4&is=654147a4&hm=1f0b9c6149076e4fa35f949ce5f241a506c20f03c0c99817349c86b3b9efb852&" alt="" />
            <span className='po'>Wishlist</span>
            </Link>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link fon" to="/">
            <img className="resi ktt d-none d-lg-inline" src="https://cdn.discordapp.com/attachments/903660417073680394/1168980192467886271/pngwing.com1.png?ex=6553bca4&is=654147a4&hm=e990d79a4ce4f01c1233051a9ae108d6217b88cc1e089eb3a42c822f2c2bbf39&" alt="" />
            <span className='po'>Cart</span>
            </Link>
        </li>
        
        
        
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;