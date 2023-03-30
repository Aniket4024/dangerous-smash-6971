import Navbar from './navbar/Navbar';
import AutoPlayMethods from "./home/Carousel"
import BestSeller from './home/BestSeller';
import HotDeal from './home/HotDeal';
import JustIn from './home/JustIn';
import { useState } from 'react';
import Footer from './footer/Footer';
function Home(){

  const [frame,setFrame] = useState(false);

    return (
        <div id="home">
          <Navbar/>
          <AutoPlayMethods/>
          <BestSeller/>
          <div id='afterBestSell'>
            <div></div>
            <div>
              <h2>SUGAR FAM REWARDS</h2>
              <p style={{display:"flex",alignItems:"center"}}>Enjoy up to <h4 style={{margin:"auto 5px"}}>20% off</h4> in SUGAR exclusive stores or on our Website/App.</p>
            </div>
            <div>
              <p>T&C applies</p>
              <p>Know more</p>
            </div>
          </div>
          <HotDeal/>
          <JustIn/>
          <div id='TLS'>
            <div id="TLSHead">
                  <div></div>
                  <p>TIPSY LIPS SCRUB + BALM DUO</p>
                  <div></div>
            </div>
            <div onClick={()=>{setFrame(true)}}>
              {frame ? <iframe src="//www.youtube.com/embed/wW8AeMh6b-4?autoplay=1" allow="autoplay *; fullscreen *" frameborder="0" class="DesktopHomepage_layoutBorder__GnTvK"></iframe> : null}
            </div>
          </div>
          <div id='refNern'>
            <div id="TLSHead">
                <div></div>
                <p>REFER YOUR FRIENDS</p>
                <div></div>
            </div>
            <div></div>
          </div>
          <Footer/>
        </div>
    )
}
export default Home;