import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Logo from '../../images/LogoMa.png'

function Navbar() {
  const { isConnected } = useAccount();
  
  // Replace "YOUR_RAINBOWKIT_URL_HERE" with the actual URL for the Rainbowkit website
  const rainbowkitUrl = encodeURIComponent("YOUR_RAINBOWKIT_URL_HERE");
  const wagmiConnectUrl = `https://www.wagmii.com/connect?returnUrl=${rainbowkitUrl}`;

  
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      background: '#00007A', 
      color: '#FFB60A', 
      padding: "1rem", 
      width: "100%", 
      position: "fixed", 
      top: 0, 
      left: 0,
      zIndex: 1,
    }}>

      <div>
        <a href="#home">
          <img src={Logo} alt="Logo" style={{height:'100px' }} />
        </a>
      </div>
      <ul style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        alignItems: "center", 
        listStyle: "none", 
        marginRight:'2rem' 
      }}>
        <li><a href="#terms" style={{ color: 'greenyellow',fontSize:'18px  ', textDecoration: "none", margin: "0 1rem" }}>Terms</a></li>
        <li><a href="#about" style={{ color: 'greenyellow',fontSize:'18px ', textDecoration: "none", margin: "0 1rem" }}>About</a></li>
        <li><a href="#start" style={{ color: 'greenyellow',fontSize:'18px ', textDecoration: "none", margin: "0 1rem" }}>Start-Saving</a></li>
        <li><ConnectButton /></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
