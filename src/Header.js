import logo from './logo.svg';
import './App.css';


export default function Header(){
    return(
        <>
        <header className='App-header'>
        <nav className='Navbar'>
          <img src={logo} className='App-logo' alt='logo' />
         <div className='Header-right'>
           <a className='active' href='#home'>Home</a>
           <a href='#contact'>Contact</a>
           <a href='#about'>About</a>
         </div>
        </nav>
      </header>
      <div className='editSection'>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>He well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      </>
    );
}