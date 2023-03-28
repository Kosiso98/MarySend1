import React from 'react';
import HeroImage from '../../images/pexels6.jpg';

function Header() {
  return (
    
    <div  style={{ 
      position: 'relative', 
      backgroundColor: '#fff',
      color:'#02641F', 
      overflow: 'hidden' 
    }}>
      <img 
        src={HeroImage} 
        alt="Hero Image" 
        style={{ 
          width: '100%', 
          height: '60%', 
          objectFit: 'cover' 
        }} 
      /> 
    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor:'#00007A',opacity:'40%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{ color: 'orangered', fontSize: '4rem', marginBottom: '2rem' }}>MARYSEND</h1>
        <p style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}>...more than a bank</p>
        <a href="#about" style={{ textDecoration: 'underline' }}>
          <button style={{ padding: '1rem 2rem', borderRadius: '10px', background:'#02641F', color: '#fff', fontSize: '15px', border: 'none' }}>Our Services</button>
        </a>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00007A" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,229.3C384,256,480,224,576,224C672,224,768,256,864,277.3C960,299,1056,309,1152,272C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}

export default Header;