import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../assets/utils/helpers";
import logoImage from "../../assets/images/wht-logo.svg";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <img
          src={logoImage}
          className="my-2 mx-2"
          style={{ width: "10%" }}
          alt="cover"
        ></img>
      <nav className="flex-row" style={{ justifyContent: 'flex-end' }}>
        <ul>
          <a data-testid="link" href="/">
            Amber Phillips
          </a>
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-2 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={category.name}
            ><a href={`#${category.name}`}>
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
              </a>
            </li>
          ))}
          <li className="mx-2">
            <a
              data-testid="resume"
              href="#resume"
              onClick={() => setContactSelected(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
