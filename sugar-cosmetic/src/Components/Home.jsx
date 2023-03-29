import Navbar from './navbar/Navbar';
import AutoPlayMethods from "./home/Carousel"
import BestSeller from './home/BestSeller';
import HotDeal from './home/HotDeal';
function Home(){

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
        </div>
    )
}
export default Home;