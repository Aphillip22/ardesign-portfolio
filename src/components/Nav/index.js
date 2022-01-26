import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";
import logoImage from "../../assets/images/wht-logo.svg";
import { NavLink } from "react-router-dom";


function Navbar(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
  const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];

 const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <img
          src={logoImage}
          href="/"
          className="my-2 mx-2"
          style={{ width: "8%" }}
          alt="logo"
        ></img>
      <nav className="flex-row" style={{ justifyContent: 'flex-end' }}>
      <ul className="flex-row navLayout">
        {tabs.map(tab => (
          <li className="mx-2" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
              props.currentPage === tab ? 'nav-linkActive' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      </nav>
    </header>
  );
}

export default Navbar;
