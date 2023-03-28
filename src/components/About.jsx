import picture1 from '../../images/etherum.png';
import picture2 from '../../images/bit.png';
import picture3 from '../../images/ripp.png';
import picture4 from '../../images/bit-coin2.png';
import picture5 from '../../images/bitcoin.png';
import picture6 from '../../images/bit2.png';

function About(){
    return(
<div style={{backgroundColor:'#00007A'}}>
<div id='terms' class="tile is-ancestor" style={{textAlign:'center'}}>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">One</p>
      <p class="subtitle">you are required to pledged an amount of at least 0.02 ether</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Two</p>
      <p class="subtitle">2% withdrawal fee</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Three</p>
      <p class="subtitle">The 2% fee is charged from your intended withdrawal amount.</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">Four</p>
      <p class="subtitle">Please ensure to follow the guide,thanks!</p>
    </article>
  </div>
</div>
<div style={{backgroundColor:'#00007A'}} class="tile is-ancestor">
  <div style={{backgroundColor:'#00007A'}} class="tile is-parent">
    <article style={{backgroundColor:'blue'}} class="tile is-child box">
      <p style={{backgroundColor:'blue',color:'orange'}} class="title">Security</p>
      <div>
      <img src={picture1} alt="picture" style={{height:'200px'}}  />
      </div>
      {/* <p style={{backgroundColor:'blue',color:'whitesmoke'}} class="subtitle">What is up?</p> */}
    </article>
  </div>
  <div  style={{backgroundColor:'#00007A'}} class="tile is-parent">
    <article style={{backgroundColor:'blue'}} class="tile is-child box">
      <p  style={{backgroundColor:'blue',color:'orange'}} class="title">Privacy</p>
      <img src={picture2} alt="picture" style={{height:'200px' }} />
      {/* <p  style={{backgroundColor:'blue',color:'whitesmoke'}} class="subtitle">Bar</p> */}
    </article>
  </div>
  <div style={{backgroundColor:'#00007A'}} class="tile is-parent">
    <article style={{backgroundColor:'blue'}} class="tile is-child box">
      <p  style={{backgroundColor:'blue',color:'orange'}} class="title">Reliability</p>
      {/* <p class="subtitle">With some content</p> */}
      <img src={picture3} alt="picture" style={{height:'200px' }} />
      {/* <div style={{backgroundColor:'#00007A',color:'whitesmoke'}} class="content">
        <p style={{backgroundColor:'blue',color:'whitesmoke'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div> */}
    </article>
  </div>
  <div style={{backgroundColor:'#00007A'}} class="tile is-parent">
    <article class="tile is-child box" style={{backgroundColor:'blue'}}>
      <p style={{backgroundColor:'blue',color:'orange'}} class="title">Freedom</p>
      <img src={picture4} alt="picture" style={{height:'200px' }}/>
      {/* <p class="subtitle" style={{backgroundColor:'blue',color:'whitesmoke'}}>What is up?</p> */}
    </article>
  </div>
  <div  style={{backgroundColor:'#00007A'}} class="tile is-parent">
    <article class="tile is-child box" style={{backgroundColor:'blue'}}>
      <p class="title" style={{backgroundColor:'blue',color:'orange'}}>Trusted</p>
      <img src={picture5} alt="picture" style={{height:'200px' }}/>
      {/* <p class="subtitle" style={{backgroundColor:'blue',color:'whitesmoke'}}>Bar</p> */}
    </article>
  </div>
  <div class="tile is-parent" style={{backgroundColor:'#00007A'}}>
    <article  style={{backgroundColor:'blue'}} class="tile is-child box">
      <p class="title" style={{backgroundColor:'blue',color:'orange'}}>Shared</p>
      {/* <p class="subtitle" style={{backgroundColor:'blue',color:'whitesmoke'}}>With some content</p> */}
      {/* <div class="content" style={{backgroundColor:'blue'}}>
        <p style={{backgroundColor:'blue',color:'whitesmoke'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div> */}
      <img src={picture6} alt="picture" style={{height:'200px' }}/>
    </article>
  </div>
  
</div>
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00007A" fill-opacity="1" d="M0,32L1440,96L1440,0L0,0Z"></path></svg> */}
</div>
    );
}


export default About;