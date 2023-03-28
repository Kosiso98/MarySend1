import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { Account } from './components'
import 'bulma/css/bulma.min.css';
import Navbar    from './pages/Navbar'
import Contract from './pages/Contract'
import Header from './components/Header'
import About from './components/About';
import Footer from './pages/Footer';
import Level from './pages/Level';



import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
  import { goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'SaverSmart',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



export function App() {
  const { isConnected } = useAccount()
  return (
    <>
    
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div style={{backgroundColor:'#00007A'}}>    
        <Navbar/>
      <Header/>
      {/* <ConnectButton /> */}
      <About/>

      <Contract/>
      <Level/>
      <Footer/>
      
      {/* <ConnectButton />
      {isConnected && <Account />} */}

      </div>
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  )
}
