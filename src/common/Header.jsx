// import React from 'react';
// import {Link} from 'react-router-dom';

// const Header = () => {
//   return (
//     <header>
//        <div className='logo__parent'>
//            <span className='h3'>
//            React
//           </span>
//        </div>
//        <div className='navigation__parent'>
//            <ul>
//              <li>
//                <Link to="/home">
//                  <i className='fa fa-home nav-icon'/>
//                  Home
//                 </Link>
//              </li>
//              <li>
//                  <Link to="/form">Form Builder</Link>
//               </li>
//            </ul>
//        </div>
//     </header>
//   )
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import Home from "../components/modules/home";

function Header() {
  return (
    <div>
      <div className="header">
        <h1> Welcome to Form Builder Application</h1>
        <h3> Simple form builder </h3>
        <Link to="/form">
          <button  size="lg">
            Create New Form
          </button>
        </Link>
      </div>
      <div className="bar"></div>
      <Home />
    </div>
  );
}

export default Header;
