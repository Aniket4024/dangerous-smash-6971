import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import SkinCare from "./product/SkinCare"

function Product(){
    return (
        <div id="product">
            <Navbar/>
            <SkinCare/>
            <Footer/>
        </div>
    )
}
export default Product