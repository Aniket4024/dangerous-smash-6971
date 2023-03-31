import { useState } from "react";
import Navbar from "../navbar/Navbar";

function SkinCare(){

    const [width1,setWidth] = useState(false)

    return(
        <div id="sknCare">
            <div>
                <p>Home</p>
                <svg fill="rgb(119, 119, 119)" style={{margin:"auto 10px"}} width="25px" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                <p>Skin Care Products</p>
            </div>
            <div>
                <div>
                    <div style={{height:`${width1 ? "160px" : "50px"}`}}>
                      <div onClick={(e)=>setWidth(!width1)} style={{position:"fixed",marginTop:"-25px"}}>
                        <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}><h4 style={{marginRight:"10px"}}>Sort By:</h4>Relevance</p>
                        <svg className="rotate" width="25px" style={{position:"fixed",marginTop:"6px",marginLeft:"235px",transform:`${width1 ? "rotate(180deg)": "rotate(0deg)"}`}} fill="gray" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                      </div>
                      <div style={{position:"fixed",marginTop:"60px",display:`${width1 ? "block" : "none"}`}}>
                        <div>
                            <input type="radio" name="sort" id="" /> <label htmlFor="">Relevance</label>
                        </div>
                        <div>
                            <input type="radio" name="sort" id="" /> <label htmlFor="">Price: High To Low</label>
                        </div>
                        <div>
                            <input type="radio" name="sort" id="" /> <label htmlFor="">Price: Low To High</label>
                        </div>
                      </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default SkinCare;