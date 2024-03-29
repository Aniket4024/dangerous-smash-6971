import { useState } from "react"
import Menu from "./Menu";
function Navbar({handle}){
    const [clearButn,setClearButn] = useState(false);
    const [text,setText] = useState("");

    return (
        <div id="nav">
            <div id="offerLable">
                <div></div>
                <p>FREE Base Of Glory Pore Minimizing Primer on a spend of Rs.999</p>
                <button onClick={()=>{document.getElementById("offerLable").style.display="none";}}>
                    <span width="1px" class="material-symbols-outlined">
                        close
                    </span>
                </button>
            </div>
            <div id="navbar">
                <div>
                    <img src="https://i.ibb.co/BGdP0fv/Sugar-Logo.png" alt="Logo" />
                </div>
                <div>
                    <input 
                        type="text" 
                        onChange={(e)=>{
                            setClearButn(true);
                            setText(e.target.value);
                            if(e.target.value===""){
                                setClearButn(false)
                            };
                        }}
                        value={text}
                        placeholder={"Try \"Liquid Lipstick\" "}
                    />
                    <div>
                        {
                            clearButn ? <button onClick={()=>{setText(""); setClearButn(false)}}>
                                <span width="1px" class="material-symbols-outlined">
                                    close
                                </span>
                            </button> : null
                        }
                    </div>
                    <button>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" alt="search_icon" style={{height: "15px", width: "15px",margin:"5px"}}><path d="m15.646 14.651-2.942-2.944a7.246 7.246 0 0 0-.804-9.869A7.1 7.1 0 0 0 6.942.003 7.106 7.106 0 0 0 2.09 2.109 7.233 7.233 0 0 0 .003 7.004a7.24 7.24 0 0 0 1.819 5.003 7.093 7.093 0 0 0 9.78.812l2.918 2.944a.793.793 0 0 0 .868.175c.097-.04.185-.1.258-.175a.804.804 0 0 0 0-1.112ZM7.153 12.82a5.516 5.516 0 0 1-3.083-.944A5.59 5.59 0 0 1 2.025 9.36a5.648 5.648 0 0 1-.316-3.236 5.617 5.617 0 0 1 1.52-2.868A5.536 5.536 0 0 1 6.07 1.725a5.505 5.505 0 0 1 3.207.318 5.562 5.562 0 0 1 2.49 2.063 5.637 5.637 0 0 1-.69 7.072 5.526 5.526 0 0 1-3.925 1.64Z" fill="#212121"></path></svg>
                        <label htmlFor="">Search</label>
                    </button>
                </div>
                <div>
                    <span>
                        <svg width="1em" height="1em" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" alt="person_icon" style={{width: "20px", height: "19px"}}><path d="M9.5 0C4.253 0 0 4.367 0 9.753c0 5.387 4.253 9.753 9.5 9.753S19 15.14 19 9.753C19 4.367 14.747 0 9.5 0Zm0 2.714c2.126 0 3.848 1.768 3.848 3.95 0 2.183-1.722 3.952-3.848 3.952s-3.848-1.77-3.848-3.951c0-2.183 1.722-3.951 3.848-3.951Zm0 15.344c-2.445 0-4.636-1.114-6.12-2.874 1.234-2.151 3.512-3.596 6.12-3.596s4.886 1.445 6.12 3.596c-1.484 1.76-3.675 2.874-6.12 2.874Z" fill="#fff"></path></svg>
                    </span>
                    <p>Login / Register</p>
                </div>
                <div>
                    <span>
                        <svg width="18px" height="18px" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" alt="favorite_icon" class="cursor"><path d="M19.071 2.37A6.639 6.639 0 0 0 14.908.5a6.675 6.675 0 0 0-4.4 1.244A6.677 6.677 0 0 0 5.855.507a6.622 6.622 0 0 0-4.263 2.204A6.374 6.374 0 0 0 .005 7.172a6.394 6.394 0 0 0 1.939 4.326l7.818 7.666a1.051 1.051 0 0 0 .745.304 1.066 1.066 0 0 0 .745-.304l7.82-7.666a6.446 6.446 0 0 0 1.427-2.094 6.342 6.342 0 0 0 0-4.94 6.445 6.445 0 0 0-1.428-2.093Zm-1.48 7.677-7.084 6.936-7.084-6.936A4.378 4.378 0 0 1 2.201 7.8a4.324 4.324 0 0 1 .25-2.535 4.423 4.423 0 0 1 1.64-1.975 4.555 4.555 0 0 1 2.48-.754 4.505 4.505 0 0 1 3.15 1.286 1.051 1.051 0 0 0 .744.304 1.067 1.067 0 0 0 .746-.304 4.536 4.536 0 0 1 3.103-1.07 4.524 4.524 0 0 1 3.013 1.296c.8.791 1.264 1.851 1.298 2.965a4.342 4.342 0 0 1-1.117 3.034h.083Z" fill="#fff"></path></svg>
                    </span>
                    <span>
                        <svg width="1em" height="1em" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-end" style={{color:"white",fontSize:"22px"}}><path d="M15.22 6.049v.05h3.626c.304 0 .595.112.808.309.214.197.333.464.333.741v12.1c0 .86-.37 1.687-1.03 2.297-.662.61-1.559.953-2.495.953H4.546a3.682 3.682 0 0 1-2.494-.953c-.661-.61-1.031-1.436-1.031-2.297v-12.1c0-.277.119-.544.333-.741.213-.197.504-.309.808-.309h3.625V4.949c0-1.152.496-2.258 1.38-3.075C8.052 1.058 9.252.6 10.504.6c1.252 0 2.452.46 3.337 1.275.884.817 1.38 1.923 1.38 3.075v1.1Zm-2.333.05h.05V4.949c0-.598-.257-1.17-.714-1.592a2.538 2.538 0 0 0-1.719-.658c-.644 0-1.263.236-1.72.658a2.168 2.168 0 0 0-.713 1.592V6.099h4.816Zm-9.533 2.1h-.05v11.05c0 .306.132.6.365.815.233.215.549.335.877.335h11.916c.328 0 .644-.12.877-.335.233-.216.365-.509.365-.815V8.199H15.221V9.349c0 .277-.12.544-.333.741a1.194 1.194 0 0 1-.809.309c-.304 0-.595-.111-.809-.309a1.009 1.009 0 0 1-.333-.741V8.199H8.071V9.349c0 .277-.12.544-.333.741a1.194 1.194 0 0 1-.809.309c-.304 0-.595-.111-.809-.309a1.009 1.009 0 0 1-.333-.741V8.199H3.354Z" fill="#E9E9E9" stroke="#FDFCFC" stroke-width="0.1"></path></svg>
                    </span>
                    <span>
                        <svg width="18px" height="18px" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" alt="discount_icon"><path fill-rule="evenodd" clip-rule="evenodd" d="m8.744 3.662.832-.803.832.803a3 3 0 0 0 2.504.813l1.146-.162.2 1.134a3 3 0 0 0 1.55 2.132l1.018.54-.505 1.03a3 3 0 0 0 0 2.639l.505 1.031-1.018.54a3 3 0 0 0-1.55 2.131l-.2 1.134-1.146-.162a3 3 0 0 0-2.504.813l-.832.804-.832-.804a3 3 0 0 0-2.504-.813l-1.146.162-.2-1.134a3 3 0 0 0-1.55-2.132l-1.018-.539.505-1.031a3 3 0 0 0 0-2.638l-.505-1.032 1.018-.539a3 3 0 0 0 1.55-2.132l.2-1.134 1.146.162a3 3 0 0 0 2.504-.813ZM8.88.75a1 1 0 0 1 1.39 0l1.527 1.475a1 1 0 0 0 .834.27l2.104-.296a1 1 0 0 1 1.125.817l.366 2.086a1 1 0 0 0 .517.71l1.874.993a1 1 0 0 1 .43 1.324l-.93 1.901a1 1 0 0 0 0 .88l.93 1.9a1 1 0 0 1-.43 1.324l-1.874.993a1 1 0 0 0-.517.71l-.366 2.087a1 1 0 0 1-1.125.817l-2.104-.297a1 1 0 0 0-.834.27l-1.527 1.475a1 1 0 0 1-1.39 0l-1.527-1.474a1 1 0 0 0-.834-.271l-2.104.297a1 1 0 0 1-1.125-.817l-.366-2.087a1 1 0 0 0-.517-.71l-1.874-.993a1 1 0 0 1-.43-1.323l.93-1.902a1 1 0 0 0 0-.879l-.93-1.901a1 1 0 0 1 .43-1.324l1.874-.992a1 1 0 0 0 .517-.711l.366-2.086a1 1 0 0 1 1.125-.817l2.104.297a1 1 0 0 0 .834-.271L8.881.749Zm4.524 7.31a1 1 0 0 0-1.413-1.415l-6.245 6.234a1 1 0 1 0 1.413 1.416l6.245-6.235Zm-4.87-.188A1.56 1.56 0 0 1 6.974 9.43 1.56 1.56 0 1 1 8.535 7.87Zm3.642 6.754a1.56 1.56 0 0 0 1.561-1.559 1.56 1.56 0 0 0-1.56-1.558 1.56 1.56 0 1 0 0 3.117Z" fill="#fff"></path></svg>
                    </span>
                </div>
            </div>
            <div id="menu-main">
                <Menu/>
            </div>
        </div>
    )
}
export default Navbar