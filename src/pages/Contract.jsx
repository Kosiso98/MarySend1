import { ethers } from 'ethers';
import React from 'react';
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants'

function contract() {
  
  const [depositInput, setDepositInput] = React.useState('')
  const [withdrawInput, setWithdrawInput] = React.useState('')
  const [balance, setBalance] = React.useState('')

  const [dLoading, setDloading] = React.useState(false)
  const [wLoading, setWloading] = React.useState(false)
 
  const { data: signer, isError, isLoading } = useSigner()
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    signerOrProvider: signer,
  })

  async function pledgeEth(e) {
    try {
      e.preventDefault();
      console.log('deposit..', depositInput)

      setDloading(true)

      const tx = await contract.pledge({value: ethers.utils.parseEther(depositInput)});
      const hash = await tx.wait();
      console.log("deposit ~ hash:", hash)

      setDepositInput('')
      getBalance()
      setDloading(false)
    } catch (error) {
      console.log("deposit , error:", error)
    }

  }

  async function extractEth(e) {
    try {
      e.preventDefault();
      console.log('withdrawing..', withdrawInput)

      setWloading(true)

      const tx = await contract.extract(ethers.utils.parseEther(withdrawInput.toString()));
      const hash = await tx.wait();
      console.log("withdrawal ~ hash:", hash)

      setWithdrawInput('')
      getBalance()
      setWloading(false)
    } catch (error) {
      console.log("withdraw ~ error:", error.data.message)
      
    }

  }

  async function getBalance() {
    try {
      console.log('getting balance......')

      const bal = await contract.getBalance();

      setBalance(ethers.utils.formatEther(bal))
    } catch (error) {
      console.log("getBalance ~ error:", error)
      
    }

  }

  return (

    <div id='start' >
    <article class="message is-info">
  <div style={{backgroundColor:'orange', fontSize:"16px"}} class="message-header">
    Did you know?
    <button class="delete"></button>
  </div>
  <div style={{backgroundColor:'#00007A', color:'whitesmoke'}} class="message-body">
   <p> To prevent overdraft, and to potect you aginst you,The contract allows users to deposit and withdraw funds, and also check their account balance. The contract charges a 2% fee on withdrawals.</p>
   <p> Please interact with the contract using <span style={{color:'red'}}>GOERLI network,</span>the  HAPPY SAVING!!</p>
  </div>
</article>
      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <contract>
          <label></label>
          <input
            style={{borderRadius:'10px', borderWidth:'5px',borderColor:'blue',fontSize:'16px'}} 
            type="text" 
            name="Amount"
            placeholder='min 0.001 Eth' 
            value={depositInput}
            onChange={e=>setDepositInput(e.target.value)}
          />
          <button 
          style={{borderRadius:'10px',fontSize:'20px',padding:'3px',marginLeft:'5px',color:'white',borderColor:'blue',backgroundColor:'green'}}
            onClick={(e) => pledgeEth(e)}
            type="submit"
          >{dLoading ? 'Depositing...' : 'Deposit'}</button>
        </contract>
      </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 100,paddingLeft:'10px' }}>
            
      <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00007A" fill-opacity="1" d="M0,0L48,10.7C96,21,192,43,288,74.7C384,107,480,149,576,160C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
        <contract>
          <label></label>
          <input 
          style={{borderRadius:'10px', borderWidth:'5px',borderColor:'orange',fontSize:'16px'}}
            placeholder='withdawal amount '
            type="text" 
            
            name="Amount" 
            value={withdrawInput}
            onChange={e=>setWithdrawInput(e.target.value)}
          />
          <button
          style={{borderRadius:'10px',fontSize:'20px',padding:'3px',marginLeft:'5px',color:'blue',borderColor:'orange'}} 
            onClick={(e) => extractEth(e)}
            type="submit"
          >{wLoading ? 'Withdrawing...' : 'Withdraw'}</button>
        </contract>
      </div>
    
       <div>
       <div style={{ display: 'flex', alignItems: 'center' ,paddingRight:'20px'}}>
        <label style={{color:'whitesmoke'}}>{balance}ETH</label>
        <button
        style={{borderRadius:'10px',fontSize:'20px',padding:'3px',marginLeft:'5px',borderColor:'green'}}
          onClick={()=>getBalance()}
        >Balance</button>
      </div>

      </div> 
      </div>      
    </div>
  );
}

export default contract;
