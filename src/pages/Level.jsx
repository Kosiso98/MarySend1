function Level(){
    return(
        <div id="about">


        <div  style={{backgroundColor:'whitesmoke', padding:'15px'}}>
        <h3 style={{color:'green',textAlign:'center', paddingBottom:'10px'}}> The Adoption Of Blockchain Technolog  is increasing</h3>
        <progress style={{color:'red'}} class="progress is-info" value="80" max="100" color="red">80%</progress>
        </div>
        <article class="message is-info">
  <div style={{backgroundColor:'#00007A', color:'orange'}}class="message-header">
    What Exactly is Blockchain Technology
    <button class="delete"></button>
  </div>
  <div class="message-body" style={{color:'blue'}}>
  Blockchain is a method of recording information that makes it impossible or difficult for the system to be changed, hacked, or manipulated. A blockchain is a distributed ledger that duplicates and distributes transactions across the network of computers participating in the blockchain.
  </div>
  <div class="message-body" style={{color:'black'}}>
  A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). The timestamp proves that the transaction data existed when the block was created. Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it. Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.
  </div>
</article>
        </div>
    );
}

export default Level;