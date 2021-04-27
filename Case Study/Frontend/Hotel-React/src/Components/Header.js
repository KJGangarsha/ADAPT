import React from 'react';
import { Link, withRouter } from "react-router-dom";

function Header() {
  /* logout method */
    const logout = () => {
        localStorage.removeItem("role");        
      };
    return (
        <div>                
          <header>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{fontFamily:"cursive", fontSize:"15px"}}>
              <img src="https://t4.ftcdn.net/jpg/03/00/94/03/360_F_300940312_bgYarVigKHjPi2w5jGHqwvDaDFL7AWhc.jpg" alt="image1" width="40" height="40" style={{marginRight:"10px"}}/>
            <a className="navbar-brand" href="/home">HOTEL GRAND AJ INN.</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>              
                
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
{/* owner navbar */}                
                {localStorage.getItem("role") === "owner" ? (
                  <ul className="navbar-nav ml-auto">
                                        
                    <li className="nav-item">
                      <Link className="nav-link" to={"/owner"}>
                        🏡Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/ownerView"}>
                      👨‍💻Managers
                      </Link>
                    </li>                                 

                    <li className="nav-item">
                      <Link className="nav-link" to={"/staffView"}>
                      👨‍💼staff
                    </Link>
                  </li>

                  <li className="nav-item">
                      <Link className="nav-link" to={"/RoomView"}>
                      🛏Rooms
                    </Link>
                  </li>     

                  <li className="nav-item">
                      <Link className="nav-link" to={"/inventoryView"}>
                      📺Inventory
                    </Link>
                  </li> 

                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkIn"}>
                      🚪Check-In
                    </Link>
                  </li> 
                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkOut"}>
                      🧳Check-Out
                    </Link>
                  </li> 
                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkOutLog"}>
                      📒Guest Log
                    </Link>
                  </li>                                   
                  
                  <li className="nav-item">
                    <Link onClick={logout} className="nav-link" to={"/home"}>
                      ⚠Logout
                    </Link>
                  </li>
                </ul>
              ) : null}

{/* manager navbar */}
            {localStorage.getItem("role") === "manager" ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/manager"}>
                      🏡Home
                    </Link>
                  </li>
                  
                    <li className="nav-item">
                      <Link className="nav-link" to={"/staffView"}>
                      👨‍💼staff
                    </Link>
                  </li>

                  <li className="nav-item">
                      <Link className="nav-link" to={"/RoomView"}>
                      🛏Rooms
                    </Link>
                  </li>                  

                  <li className="nav-item">
                      <Link className="nav-link" to={"/inventoryView"}>
                      📺Inventory
                    </Link>
                  </li> 

                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkIn"}>
                      🚪Check-In
                    </Link>
                  </li> 
                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkOut"}>
                      🧳Check-Out
                    </Link>
                  </li> 
                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkOutLog"}>
                      📒Guest Log
                    </Link>
                  </li>                                   
                  
                  <li className="nav-item">
                    <Link onClick={logout} className="nav-link" to={"/home"}>
                      ⚠Logout
                    </Link>
                  </li>
                </ul>
              ) : null}

{/* receptionist navbar */}
            {localStorage.getItem("role") === "staff" ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/reception"}>
                      🏡Home
                    </Link>
                  </li>

                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkIn"}>
                      🚪Check-In
                    </Link>
                  </li> 
                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkOut"}>
                      🧳Check-Out
                    </Link>
                  </li> 
                  <li className="nav-item">
                      <Link className="nav-link" to={"/checkOutLog"}>
                      📒Guest Log
                    </Link>
                  </li>                                   
                  
                  <li className="nav-item">
                    <Link onClick={logout} className="nav-link" to={"/home"}>
                      ⚠Logout
                    </Link>
                  </li>
                </ul>
              ) : null}

{/* Global navbar */}
            {!localStorage.getItem("role") ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      ⏩Login
                    </Link>
                  </li>                  
                 
                </ul>
              ) : null}
            
            </div>           
        </nav>
        </header>
        </div>
    )
}

export default withRouter (Header)
